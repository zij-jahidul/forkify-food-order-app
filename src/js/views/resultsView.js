import View from './View';
import previewView from './previewView';

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No Recipe find for you. Please try again ;)';
    _message = '';

    _generateMarkup() {
        return this._data.map(bookmark => previewView.render(bookmark , false)).join('');  
    };


};

export default new ResultsView();

