function CurrentDate(){
    const now = new Date();

    const dayOfMonth = now.getDate();
    const dayOfWeekIndex = now.getDay(); 
    const monthIndex = now.getMonth(); 
    const year = now.getFullYear();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    function getDaySuffix(day) {
        if (day === 1 || day === 21 || day === 31) return 'st';
        if (day === 2 || day === 22) return 'nd';
        if (day === 3 || day === 23) return 'rd';
        return 'th';
    }

    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
    const month = months[monthIndex];
    
    const daySuffix = getDaySuffix(dayOfMonth);

    return(
        <>
            <p>Day: {dayOfWeek}</p>
            <p>Date: {dayOfMonth}{daySuffix}</p>
            <p>Month: {month}</p>
            <p>Year: {year}</p>
        </>
    )
}
export default CurrentDate;