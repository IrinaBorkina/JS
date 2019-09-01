export default class Controller {
    constructor (game, view) {
        this.game = game;
        this.view = view;
        this.intervalId = null;
        this.isPlaying = false;

        document.addEventListener('keydown', this.handleKeyDown.bind(this));

        this.view.renderStartScreen();
    }

    update () {
        this.game.movePieceDown();
        this.updateView();
    }

    play () {
        this.isPlaying = true;
        this.startTimer();
        this.updateView();
    }

    pause () {
        this.isPlaying = false;
        this.stopTimer();
        this.updateView();
    }

    updateView () {
        if (!this.isPlaying) {
            this.view.renderPauseScreen();
        } else {
            this.view.renderMainScreen(this.game.getState());
        }
    }

    startTimer () {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.update();
            }, 1000);
        }
    }

    stopTimer () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    handleKeyDown (event) {
        switch (event.keyCode) {
            case 13:
                if (this.isPlaying) {
                    this.pause();
                } else {
                    this.play();
                }
                break;
            case 37:
                this.game.movePieceLeft();
                this.view.renderMainScreen(this.game.getState());
                break;
            case 38:
                this.game.rotatePiece();
                this.view.renderMainScreen(this.game.getState());
                break;
            case 39:
                this.game.movePieceRight();
                this.view.renderMainScreen(this.game.getState());
                break;
            case 40:
                this.game.movePieceDown();
                this.view.renderMainScreen(this.game.getState());
                break;
        }
    }
}