import Cell from './Cell';

export default class EmptyCell extends Cell {
    constructor(x, y, context, sandbox) {
        super(x, y, context);
        this.sandbox = sandbox;
    }

    click() {
        const count = this.sandbox.getCountBomb(this.x, this.y);
        this.node.innerHTML = count || '';
        this.updateState();
    }

    updateState() {
        this.state = 1;
    }

    render() {
        if (this.state !== null) {
            this.node.style.background = '#FFF'
        }
    }
}