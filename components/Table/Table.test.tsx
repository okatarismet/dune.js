import { render, screen } from '../../test-utils';
import BasicTable from './index';
import { styleChange, stylePrice } from './Table';
import { debug } from 'console';

describe('Table Component', () => {

    it('renders without crashing', () => {

        render(<BasicTable />);
        debug()
    })

    it('renders table headers', () => {

        render(<BasicTable />);
        expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: 'Price' })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: 'Change 24H' })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: 'Supply' })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: 'Volume 24H' })).toBeInTheDocument();
    });

    it('should style price properly', () => {
        expect(
            stylePrice(775973.576)
        ).toBe("775,973.58")
    })

    it('should style change properly to red', () => {
        expect(
            styleChange(12.34343434).props.color
        ).toBe("#088550")
    })

    it('should style change properly to green', () => {
        expect(
            styleChange(-2.34343434).props.color
        ).toBe("#CF1F2F")
    })


});
