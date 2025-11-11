"use client";

import { useState, useMemo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// TopoJSON URL
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Sample sales data with ISO_A3 country codes and percentage values
const salesData = [
  { iso: "USA", value: 28 },
  { iso: "IND", value: 18 },
  { iso: "CHN", value: 15 },
  { iso: "BRA", value: 8 },
  { iso: "RUS", value: 9 },
  { iso: "FRA", value: 7 },
  { iso: "DEU", value: 6 },
  { iso: "AUS", value: 4 },
  { iso: "CAN", value: 5 },
  { iso: "ZAF", value: 2 },
  { iso: "JPN", value: 10 },
  { iso: "GBR", value: 6 },
];

// Helper function to resolve ISO A3 code from various property names
function resolveIsoA3(geo) {
  return (
    geo?.properties?.ISO_A3 ||
    geo?.properties?.ADM0_A3 ||
    geo?.properties?.iso_a3 ||
    geo?.properties?.ISO3 ||
    null
  );
}

// Helper function to resolve country name from various property names
function resolveName(geo) {
  return (
    geo?.properties?.NAME ||
    geo?.properties?.name ||
    geo?.properties?.ADMIN ||
    geo?.properties?.ADMIN0 ||
    "Unknown"
  );
}

// Get color based on sales percentage
function getColorForValue(value) {
  if (typeof value !== "number") {
    return "#e5e7eb"; // Gray for no data
  }
  
  // Color scale based on percentage ranges
  if (value >= 25) return "#581c87"; // Very dark purple
  if (value >= 20) return "#7e22ce"; // Dark purple
  if (value >= 15) return "#9333ea"; // Purple
  if (value >= 10) return "#a855f7"; // Medium purple
  if (value >= 7) return "#c084fc"; // Light purple
  if (value >= 5) return "#d8b4fe"; // Lighter purple
  if (value >= 3) return "#e9d5ff"; // Very light purple
  return "#f3e8ff"; // Palest purple
}

// Get hover color (slightly darker)
function getHoverColor(value) {
  if (typeof value !== "number") {
    return "#d1d5db"; // Darker gray for no data
  }
  
  if (value >= 25) return "#4c1d95";
  if (value >= 20) return "#6b21a8";
  if (value >= 15) return "#7e22ce";
  if (value >= 10) return "#9333ea";
  if (value >= 7) return "#a855f7";
  if (value >= 5) return "#c084fc";
  if (value >= 3) return "#d8b4fe";
  return "#e9d5ff";
}

export default function CustomerGeography() {
  const [tooltip, setTooltip] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Create lookup map for performance
  const dataMap = useMemo(() => {
    const m = new Map();
    salesData.forEach((d) => {
      if (d.iso) m.set(d.iso.toUpperCase(), d.value);
    });
    return m;
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow p-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-main">Customer Demographics</h2>
        <p className="text-sm text-gray-500">Geographic sales distribution by country</p>
        <hr className="border-gray-700 border-1 mt-2 w-full" />
      </div>

      {/* Map Container */}
      <div className="relative bg-gray-50 rounded-md border border-gray-100 p-4">
        <ComposableMap 
          projectionConfig={{ 
            scale: 147,
            center: [0, 20]
          }} 
          className="w-full h-[300px] "
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const iso = resolveIsoA3(geo);
                const isoUpper = typeof iso === "string" ? iso.toUpperCase() : null;
                const value = isoUpper ? dataMap.get(isoUpper) : undefined;
                const key = geo.rsmKey;
                const isHovered = hoveredCountry === key;

                const fillColor = isHovered 
                  ? getHoverColor(value)
                  : getColorForValue(value);

                return (
                  <Geography
                    key={key}
                    geography={geo}
                    fill={fillColor}
                    stroke="#ffffff"
                    strokeWidth={0.5}
                    onMouseEnter={(evt) => {
                      const name = resolveName(geo);
                      const text = value === undefined 
                        ? `${name}: No data` 
                        : `${name}: ${value}% of sales`;
                      setTooltip({ 
                        text, 
                        x: evt.clientX, 
                        y: evt.clientY 
                      });
                      setHoveredCountry(key);
                    }}
                    onMouseMove={(evt) => {
                      if (tooltip) {
                        setTooltip({ 
                          text: tooltip.text, 
                          x: evt.clientX, 
                          y: evt.clientY 
                        });
                      }
                    }}
                    onMouseLeave={() => {
                      setTooltip(null);
                      setHoveredCountry(null);
                    }}
                    style={{
                      default: { 
                        outline: "none", 
                        cursor: "pointer",
                        transition: "fill 0.2s"
                      },
                      hover: { 
                        outline: "none", 
                        cursor: "pointer"
                      },
                      pressed: { 
                        outline: "none" 
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        {/* Custom Tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none fixed z-50 max-w-xs rounded-md bg-gray-900 text-white px-3 py-2 text-sm shadow-lg"
            style={{
              left: tooltip.x + 10,
              top: tooltip.y + 10,
            }}
          >
            {tooltip.text}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-4">
        

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded border border-gray-300" style={{ backgroundColor: "#581c87" }} />
            <span className="text-xs text-gray-600">25%+</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded border border-gray-300" style={{ backgroundColor: "#7e22ce" }} />
            <span className="text-xs text-gray-600">20-24%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded border border-gray-300" style={{ backgroundColor: "#9333ea" }} />
            <span className="text-xs text-gray-600">15-19%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded border border-gray-300" style={{ backgroundColor: "#a855f7" }} />
            <span className="text-xs text-gray-600">10-14%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded border border-gray-300" style={{ backgroundColor: "#c084fc" }} />
            <span className="text-xs text-gray-600">7-9%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded border border-gray-300" style={{ backgroundColor: "#d8b4fe" }} />
            <span className="text-xs text-gray-600">5-6%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded border border-gray-300" style={{ backgroundColor: "#e9d5ff" }} />
            <span className="text-xs text-gray-600">3-4%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded border border-gray-300" style={{ backgroundColor: "#f3e8ff" }} />
            <span className="text-xs text-gray-600">0-2%</span>
          </div>
          
        </div>
      </div>

    
    </div>
  );
}