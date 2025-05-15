import './style.css'
const CalendarActivity = ({startday,data})=>{
    return(<div className='activity-row'>
    {
         Array.from({length:7},(_,index)=>{
    return <div key={Math.floor(Math.random()*100000)*Date.now()} className="activity-tab">
        {startday==index && <p>{data}</p>}
    </div>
    })
    }
    </div>)
    
}
export default CalendarActivity