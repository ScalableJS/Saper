import Bomb from './Bomb';
import EmptyCell from './EmptyCell';
import Cell from './Cell';

export default class GameField {
    constructor(width = 10, height = 10, context = document.body) {
        this.listCell = [];
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const Cell = Math.random() > .8 ? Bomb : EmptyCell;
                const sandbox = {
                    getCountBomb: this.getCountBomb.bind(this),
                    showAllBomb: this.showAllBomb.bind(this)
                };

                this.listCell.push(new Cell(x, y, context, sandbox))
            }
        }

        document.body.addEventListener('click', (event) => {
            const cell = event.target.node;

            if (cell instanceof Cell) {
                cell.click();
                this.render();
            }

        })

    }

    getCellByPosition(x, y) {
        return this.listCell.filter(cell => cell.x === x && cell.y === y)[0];
    }

    getCountBomb(x, y) {
        return [
            [x - 1, y - 1],
            [x, y - 1],
            [x + 1, y - 1],

            [x + 1, y],
            [x - 1, y],

            [x - 1, y + 1],
            [x, y + 1],
            [x + 1, y + 1]

        ].reduce((acc, currentValue) => {
            if (this.getCellByPosition(...currentValue) instanceof Bomb) {
                return acc + 1
            }
            return acc
        }, 0);
    }

    showAllBomb() {
        this.listCell
            .filter(cell => cell instanceof Bomb)
            .forEach(cell => cell.updateState())

    }

    render() {
        this.listCell.forEach((cell) => cell.render())
    }
}



