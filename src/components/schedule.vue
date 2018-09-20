<template lang="html">
    <div id="schedule" class="container">
        <h1><b>S</b>chedule</h1>
        <div class="sche_cont row justify-content-center">
            <div class="sche col-md-6">
                <div class="day">
                    Day 1
                </div>
                <div class="event">
                    <div class="event_text"><p class="schedule_card_left schedule_card">參賽者報到</p><p class="time_text"><b>08</b>30</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">賽制說明</p><p class="time_text"><b>09</b>00</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">開幕式</p><p class="time_text"><b>09</b>30</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">市長與青年學子互動</p><p class="time_text"><b>10</b>00</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">各組技術人員說明</p><p class="time_text"><b>10</b>20</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">開始 coding</p><p class="time_text"><b>11</b>00</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">午餐時間</p><p class="time_text"><b>12</b>00</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">持續 coding</p><p class="time_text"><b>13</b>00</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">下午茶時間</p><p class="time_text"><b>15</b>30</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">持續 coding</p><p class="time_text"><b>16</b>00</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">晚餐時間+野台表演</p><p class="time_text"><b>18</b>30</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">戰鬥永無止盡</p><p class="time_text"><b>19</b>30</p></div>
                </div>
            </div>
            <div class="sche col-md-6">
                <div class="day">
                    Day 2
                </div>
                <div class="event">
                    <div class="event_text"><p class="schedule_card schedule_card_right">早餐時間</p><p class="time_text" ><b>07</b>00</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">最後衝刺</p><p class="time_text" ><b>08</b>00</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">午餐時間</p><p class="time_text" ><b>11</b>00</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">最後衝刺</p><p class="time_text" ><b>12</b>00</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">黑客組初賽開始 demo</p><p class="time_text" ><b>13</b>30</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">創客組開始 demo</p><p class="time_text" ><b>14</b>00</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">黑客組決賽開始 demo</p><p class="time_text" ><b>15</b>30</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">抽獎活動</p><p class="time_text" ><b>17</b>00</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">頒獎</p><p class="time_text" ><b>17</b>30</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">閉幕式</p><p class="time_text" ><b>18</b>00</p></div>
                    <div class="event_text"><p class="time_text" ><b>18</b>30</p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sr from '../js/sr.js';
export default {
    name: 'schedule',
    mounted() {
        sr.reveal('.schedule_card_right', {
            duration: '800',
            interval: 100,
            rotate: {
                x: 90,
                y: 0,
                z: 0
            }
        });
        sr.reveal('.schedule_card_left', {
            duration: '800',
            interval: 100,
            rotate: {
                x: 90,
                y: 0,
                z: 0
            }
        });
    }
}
</script>
