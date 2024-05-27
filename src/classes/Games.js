



export class Game{

    
    constructor() {
        this.name = "hello";
        this.period = 1 ;
        this.time = 10 ;


      }

    resetTime(){
        this.timer = 10 ;
        
    }

     toString(){
        return this.name ;
    }

     startTimer(duration, display) {
        let timer = duration, minutes, seconds
        let timerID = setInterval(function () {
            if (!isPaused) {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10)
    
                minutes = minutes < 10 ? "0" + minutes : minutes
                seconds = seconds < 10 ? "0" + seconds : seconds
    
                display.textContent = minutes + ":" + seconds
    
                if (--timer < 0) {
                    period++
                    periodDisplay.textContent = period
                    timer = duration
                }
                if (period == 5) {
                    period = 4
                    periodDisplay.textContent = period
                    disableButtons()
                    clearInterval(timerID)
                }
            }    
        }, 1000)
    }
}

