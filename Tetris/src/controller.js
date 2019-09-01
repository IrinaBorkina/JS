export default class Controller {
    constructor (game, view) {
        this.game = game;
        this.view = view;

        setInterval(() => {
            this.update();
        }, 1000);

        document.addEventListener('keydown', this.handleKeyDown.bind(this));

        this.view.renderStartScreen();
    }

    update () {
        this.game.movePieceDown();
        this.view.renderMainScreen(this.game.getState());
    }

    handleKeyDown (event) {
        switch (event.keyCode) {
            case 13:
                this.view.renderMainScreen(this.game.getState());
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