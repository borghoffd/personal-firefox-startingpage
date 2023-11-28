<template>
    <div class="pomodoro-timer">
        <h2>Pomodoro Timer</h2>
        <div class="pomodoro-inputs">
            <input class="minutes" id="minutes" type="number" min="0" max="59" placeholder="Minuten" v-if="!timer"
                v-model="minutes">
            <input class="seconds" id="seconds" type="number" min="0" max="59" placeholder="Sekunden" v-if="!timer"
                v-model="seconds">
        </div>
        <div class="pomodoro-display">
            <div>{{ minutes }}:{{ formattedSeconds }}</div>
        </div>
        <div class="pomodoro-buttons">
            <button @click="startTimer" class="start">Start</button>
            <button @click="pauseTimer" v-if="timer" class="pause">Pause</button>
            <button @click="stopTimer" v-if="timer" class="stop">Stop</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PomodoroTimer',
    data() {
        return {
            minutes: 25,
            seconds: 0,
            timer: null
        }
    },
    methods: {
        startTimer() {
            if (this.timer === null) {
                this.timer = setInterval(() => {
                    if (this.seconds > 0) {
                        this.seconds--;
                    } else if (this.minutes > 0) {
                        this.minutes--;
                        this.seconds = 59;
                    } else {
                        clearInterval(this.timer);
                        this.playSound();
                    }
                }, 1000);
            }
        },
        playSound() {
            const audio = document.getElementById('pomodoro-finished');
            audio.currentTime = 0;
            audio.volume = 0.3;
            audio.play();
        },
        pauseTimer() {
            clearInterval(this.timer);
            this.timer = null;
        },
        stopTimer() {
            clearInterval(this.timer);
            this.timer = null;
            this.minutes = 25;
            this.seconds = 0;
        }
    },
    computed: {
        formattedSeconds() {
            return this.seconds.toString().padStart(2, '0');
        }
    }
}
</script>

<style>

.pomodoro-timer {
    display: flex;
    flex-direction: column;
    align-items: left;
}

.pomodoro-inputs,
.pomodoro-display,
.pomodoro-buttons {
    width: 100%;
    max-width: 400px;
}

.pomodoro-timer div {
    margin-bottom: 10px;
    font-size: 48px;
    font-weight: bold;
    color: #333;
}

.pomodoro-timer .pomodoro-inputs {
    display: flex;
    align-items: center;
}

.pomodoro-timer .pomodoro-inputs input[type="number"] {
    width: 5em;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5em;
}

.pomodoro-timer .pomodoro-inputs input[type="number"]:focus {
    outline: none;
    border-color: #999;
}

.pomodoro-timer button {
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
}

.pomodoro-timer button:hover {
    background-color: #333;
}

.pomodoro-timer button.start {
    background-color: #4caf50;
}

.pomodoro-timer button.pause {
    background-color: #ff9800;
}

.pomodoro-timer button.stop {
    background-color: #f44336;
}
</style>