import React from 'react'
import Sales_valocity from '@/components/dashboard/insights/sales_valocity';
import GoalProgress from '@/components/dashboard/insights/goal_progress';
import Performance_insights from '@/components/dashboard/insights/performance_insights';
import KeyInsights from '@/components/dashboard/insights/key_insights';
import Recommendation from '@/components/dashboard/insights/recommandation';
const Insights = () => {
  return (
    <div className='container mx-auto flex flex-col gap-4 m-4'>
        <div className='flex flex-row gap-4 w-full'>
            <div className='w-1/2 '>

            <Sales_valocity/>
            </div>
            <div className='w-1/2'>
                <GoalProgress/>
            </div>
        </div>
        <div>
            <Performance_insights/>
        </div>
        <div className='w-full flex flex-row gap-4'>
            <div className='w-1/2'>
                <KeyInsights/>
            </div>
            <div className='w-1/2'>
                <Recommendation/>
            </div>
        </div>
    </div>
  )
}

export default Insights;