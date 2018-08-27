<template lang="html">
    <div id="schedule" class="container">
        <h1><b>S</b>chedule</h1>
        <div class="sche_cont row justify-content-center">
            <div class="sche col-md-6">
                <div class="day">
                    Day 1
                </div>
                <div class="event">
                    <div class="event_text"><p class="schedule_card_left schedule_card">報到 & 相見歡</p><p class="time_text"><b>08</b>30</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">開場 & 來賓致詞</p><p class="time_text"><b>09</b>00</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">公布題目&技術人員說明</p><p class="time_text"><b>10</b>00</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">開始coding</p><p class="time_text"><b>10</b>30</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">午餐時間</p><p class="time_text"><b>12</b>00</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">持續 coding</p><p class="time_text"><b>13</b>30</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">晚餐時間+野台表演</p><p class="time_text"><b>18</b>30</p></div>
                    <div class="event_text"><p class="schedule_card_left schedule_card">戰鬥永無止盡</p><p class="time_text"><b>20</b>00</p></div>
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
                    <div class="event_text"><p class="schedule_card schedule_card_right">最後衝刺</p><p class="time_text" ><b>11</b>30</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">各組擺攤demo</p><p class="time_text" ><b>12</b>30</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">交流時間</p><p class="time_text" ><b>14</b>00</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">決賽</p><p class="time_text" ><b>15</b>30</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">評審講評</p><p class="time_text" ><b>17</b>00</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">贊助商活動宣傳</p><p class="time_text" ><b>17</b>20</p></div>
                    <div class="event_text"><p class="schedule_card schedule_card_right">頒獎典禮及閉幕</p><p class="time_text" ><b>17</b>25</p></div>
                    <div class="event_text"><p class="time_text" ><b>18</b>00</p></div>
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
