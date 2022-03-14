/*Звездный Рейтинг*/

const ratings = document.querySelectorAll('.catalog__item-rating');

if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;

    for (let i = 0; i < ratings.length; i++) {
        let rating = ratings[i];
        initRating(rating);
    }

    function initRating(rating) {
        initRatingVars(rating);
        setRatingActiveWidth();
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.catalog__item-rating-active');
        ratingValue = rating.querySelector('.catalog__item-rating-value');
    }

    function setRatingActiveWidth(i = ratingValue.textContent) {
        let ratingActiveWidth = i / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
}

/*Добавление карточки товара*/

function cardTemplate() {
    return `
    <div class="catalog__item">
        <div class="catalog__item-img">
            <picture>
                <source srcset="./img/catalog-img-256/non-img-256.png"
                    media="(min-width: 1200px),(max-width: 344px)">
                <source srcset="./img/catalog-img-320/non-img-320.png" media="(max-width: 1200px)">
                <img srcset="./img/catalog-img-320/non-img-320.png" alt="Dragon Age 5">
            </picture>
        </div>
        <div class="catalog__item-main">
            <div class="catalog__item-tag action-rpg">
                <span>Action RPG</span>
            </div>
            <h3 class="catalog__item-title"><a href="#">Dragon Age 5</a></h3>
            <div class="catalog__item-rating rating_set">
                <div class="catalog__item-rating-body">
                    <div class="catalog__item-rating-active"></div>
                    <div class="catalog__item-rating-stars">
                        <input type="radio" class="catalog__item-rating-star" value="1" name="star">
                        <input type="radio" class="catalog__item-rating-star" value="2" name="star">
                        <input type="radio" class="catalog__item-rating-star" value="3" name="star">
                        <input type="radio" class="catalog__item-rating-star" value="4" name="star">
                        <input type="radio" class="catalog__item-rating-star" value="5" name="star">
                    </div>
                </div>
                <div class="catalog__item-rating-value">0</div>
            </div>
            <div class="catalog__item-description">
                <p>Non released</p>
            </div>
        </div>
        <hr class="catalog__item-hr">
        <div class="catalog__item-block-price"></div>
    </div>`;
}

let AddCard = document.querySelector('.catalog__add-card');
let addCardBtn = document.querySelector('.catalog__add-card-btn');

addCardBtn.addEventListener('click', function() {
    AddCard.insertAdjacentHTML('afterend', cardTemplate());
})