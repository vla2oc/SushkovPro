import toyota from '../../assets/projektToyota.jpg'
import raciborz from '../../assets/racibórz-after.jpg'
import raciborzReady from '../../assets/racibórz-ready.jpg'
import raciborzReady2 from '../../assets/racibórz-ready2.jpg'
export const realizacje = [
    {
        id: 'toyota',
        title: 'Salon Toyota',
        location: 'Katowice',
        image: toyota,
        slides: [{
            id: 1,
            image: toyota,
        }],
        subtitle: 'Kompleksowa realizacja fasady aluminiowo–szklanej wraz z wykończeniem dla obiektu salonu Toyota w Katowicach.',
        content: 'Obiektem realizacji był salon samochodowy Toyota w Katowicach. Prace rozpoczęliśmy 1 czerwca. Pierwszym etapem było wykonanie dokładnej konstrukcji aluminiowej, która stanowiła stabilną bazę pod całą fasadę. Następnie przeszliśmy do szklenia. Szyby o dużych formatach były montowane przy użyciu specjalistycznego sprzętu typu „pająk” – dzięki temu mogliśmy ustawić je precyzyjnie i w pełni bezpiecznie. Ostatnim etapem prac były obróbki oraz wykończenia z zastosowaniem elementów z tworzywa sztucznego, które domknęły cały projekt i nadały mu finalny, estetyczny charakter. Całość została wykonana terminowo i zgodnie z ustaleniami. Efekt końcowy prezentujemy na zdjęciach po zakończeniu realizacji',


    },
    {
        id: 'raciborz',
        title: 'Office-Racibórz',
        location: 'Racibórz',
        image: raciborz,
        slides: [{
            id: 1,
            image: raciborzReady,
        },
        {
            id: 2,
            image: raciborz,
        },
        {
            id: 3,
            image: raciborzReady2,
        }
        ],
        subtitle: '',
        content: '',

    },

]