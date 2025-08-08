import './CardOfert.css'

export default function CardOferta({ photo, title, subtitle }) {
    return (
        <>
            <div class="card_oferta">
                <img src={photo} alt="img" />
                <div class="card__content font-display">
                    <p class="card__title">{title}</p>
                    <p class="card__description">{subtitle}</p>
                </div>
            </div>
        </>
    )
}