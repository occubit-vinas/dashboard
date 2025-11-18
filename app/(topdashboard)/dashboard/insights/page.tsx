import React from 'react'
import Sales_valocity from '@/components/dashboard/insights/sales_valocity';
import GoalProgress from '@/components/dashboard/insights/goal_progress';
import Performance_insights from '@/components/dashboard/insights/performance_insights';
import KeyInsights from '@/components/dashboard/insights/key_insights';
import Recommendation from '@/components/dashboard/insights/recommandation';
const Insights = () => {
    return (
        <div className='container mx-auto flex flex-col gap-[15px]'>
            <div className='flex flex-row gap-[15px]'>
                <div className=''>
                    <Performance_insights />
                </div>
                <div className=''>
                    <KeyInsights />
                </div>
            </div>
            <div className='flex flex-row gap-[15px]'>
                <Sales_valocity />
                <GoalProgress />
            </div>
        </div>
    )
}

export default Insights;

{/* <Recommendation/> */ }