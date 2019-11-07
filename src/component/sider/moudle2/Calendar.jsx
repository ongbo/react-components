import '../../../sass/Content/calendar.scss';
let $ = require('jquery');


class Calendar extends Component {

    componentDidMount(){
        loadMyCalendar(new Date());
    }

    render(){
        return <nav id="calendar-box"></nav>
    }
}

function loadMyCalendar(date){
    let nowDate = new Date();
    let Month = [31,28,31,29,31,30,31,31,30,31,30,31];
    let month = date.getMonth();
    let weekday = date.getDay();
    let year = date.getFullYear();
    let day = date.getDate();
    let sub = (day - 1) % 7;
    let startWeekday = (weekday - sub) % 7;
    startWeekday = startWeekday >= 0?startWeekday:7+startWeekday;

    // 判断是否是闰年
    if((year % 4 === 0 && year % 100 !== 0)||year % 400 === 0){
        Month[1] = 29;
    }

    // 获取上个月的信息
    let lastMonth;
    if(month===0) {
        lastMonth = new Date(`${year-1}/12/01`);
    } else{
        lastMonth = new Date(`${year}/${month}/01`);
    }

    // 获取下个月的信息
    let nextMonth;
    if(month===11){
        nextMonth = new Date(`${year+1}/01/01`);
    } else{
        nextMonth = new Date(`${year}/${month+2}/01`);
    }

    let day_week = {};
    let weekindex = startWeekday;
    let weektds = [];
    for(let i=1;i<=Month[month];i++){
        day_week[i] = weekindex % 7;
        weekindex++;
    }

    // 上个月的信息
    let beforeMonth = Month[(month - 1)%7];
    for(let i=startWeekday;i>0;i--){
        let $td = $(`<td class="CalOtherMonthDay">${beforeMonth - i}</td>`);
        weektds.push($td);
    }

    let styleOfMonth = nowDate.getMonth() === month?'CalThisMonthDay':'CalOtherMonthDay';
    
    for(let i in day_week){
        let $td = `<td class="${styleOfMonth}-${i}">${i}</td>`;
        weektds.push($td);
    }
    let maxIndex = 6 - (weektds.length % 7) ;
    let otherMonthDay = 1;
    let flag = false;
    for(;otherMonthDay<=maxIndex+1;otherMonthDay++){
        let $td = `<td class="CalOtherMonthDay">${otherMonthDay}</td>`;
        weektds.push($td);
        flag = true;
    }
    // 再补上一行
    if(!flag){
        for(let i=0;i<=6;i++){
            let $td = `<td class="CalOtherMonthDay">${otherMonthDay++}</td>`;
            weektds.push($td); 
        }
    }
    

    // 开始制作日历表
    let $weektable = $('<table id="calendar-body" class="calendar-container" title="Calendar"></table>');
    let $dateInfo = $(`
    <tr>
        <td colspan="7">
        <table class="CalTitle" cellspacing="0">
        <tbody>
        <tr>
            <td class="CalLastMonth">
            <a href="javascript:void(0);" datetime="${lastMonth.toLocaleDateString()}">&lt;</a></td>
            <td align="center">${year}年${month+1}月</td>
            <td class="CalNextMonth" align="right">
            <a href="javascript:void(0);" datetime="${nextMonth.toLocaleDateString()}">&gt;</a></td>
        </tr>
        </tbody>
        </table>
        </td>
    </tr>
    `);
    let $thead = $(
        `
        <tr>
        <th class="CalDayHeader" abbr="日" scope="col">日</th>
        <th class="CalDayHeader" abbr="一" scope="col">一</th>
        <th class="CalDayHeader" abbr="二" scope="col">二</th>
        <th class="CalDayHeader" abbr="三" scope="col">三</th>
        <th class="CalDayHeader" abbr="四" scope="col">四</th>
        <th class="CalDayHeader" abbr="五" scope="col">五</th>
        <th class="CalDayHeader" abbr="六" scope="col">六</th>
        </tr>
        `
    );
    $weektable.append($dateInfo);
    $weektable.append($thead);
    let $tr = $('<tr></tr>');
    maxIndex = weektds.length - 1;
    weektds.forEach(function(item,index,array){
        if((index%7===0)&&(index!==0)){
            $weektable.append($tr);
            $tr = $('<tr></tr>');
        }
        $tr.append(item);
    });
    $weektable.append($tr);
    $weektable.find(`td.CalThisMonthDay-${nowDate.getDate()}`).addClass('CalTodayDay');
    $('#calendar-box').html("").append($weektable);
    $('#calendar-box').on('click','.CalLastMonth a',viewOtherMonth);
    $('#calendar-box').on('click','.CalNextMonth a',viewOtherMonth);
}

function viewOtherMonth(e){
    let dateStr = $(this).attr('datetime');
    let date = new Date(dateStr);
    loadMyCalendar(date);
}


export default Calendar;