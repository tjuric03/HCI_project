import React from 'react'
import MyCalendar from '../components/MyCalendar'
import HeaderFooterLayout from '../layouts/HeaderFooterLayout'


const Schedule = () => (
    <HeaderFooterLayout activeTab="Schedule">
        <MyCalendar></MyCalendar>
    </HeaderFooterLayout>
)

export default Schedule