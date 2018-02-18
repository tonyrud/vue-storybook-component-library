<template>
  <div class="card" :class="{rotate: hover}">
    <div class="card__side card__side--front">
        <div class="card__picture card__picture--1">
            &nbsp;
        </div>
        <h4 class="card__heading">
            <span class="card__heading-span card__heading-span-1">
              {{heading}}
            </span>
        </h4>
        <div class="card__details">
            <ul>
                <li>3 day tours</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Difficulty: easy</li>
            </ul>
        </div>
    </div>
    <div class="card__side card__side--back card__side--back-secondary">
        <div class="card__cta">
            <div class="card__cta__price-box">
                <p class="card__cta__price-only">Only</p>
                <p class="card__cta__price-value">$297</p>
            </div>
            <a class="btn btn--white">Book now!</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    hover: {
      type: Boolean,
      default: false,
    },
    heading: {
      type: String,
      default: "Add 'heading' prop",
    },
  },
}
</script>

<style lang="scss">
@import './../../styles/utils/_module.scss';
@import './../../styles/main.scss';

.card {
  // functionality of card
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 54rem;
  max-width: 340px;
  color: $color-text-light;

  &__side {
    color: $color-white;
    font-size: 2rem;
    height: 54rem;
    transition: all 800ms cubic-bezier(0.61, -0.35, 0.26, 1.12) 0ms;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.2);

    &--front {
      background-color: $color-white;
    }
    &--back {
      transform: rotateY(-180deg);

      &-secondary {
        background-image: linear-gradient(
          to right bottom,
          $color-secondary-light,
          $color-secondary-dark
        );
      }
      &-primary {
        background-image: linear-gradient(
          to right bottom,
          $color-primary-light,
          $color-primary-dark
        );
      }
      &-tertiary {
        background-image: linear-gradient(
          to right bottom,
          $color-tertiary-light,
          $color-tertiary-dark
        );
      }
    }
  }
  &.rotate {
    &:hover .card__side--front {
      transform: rotateY(180deg);
    }
    &:hover .card__side--back {
      transform: rotateY(0);
    }
  }
  // front side styling
  &__picture {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    &--1 {
      background-image: linear-gradient(
          to right bottom,
          $color-secondary-light,
          $color-secondary-dark
        ),
        url(#{$path--assets}/img/nat-5.jpg);
    }
  }
  &__heading {
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    color: $color-white;
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%;
    text-align: right;
    z-index: 1;
  }
  &__heading-span {
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    &-1 {
      background-image: linear-gradient(
        to right bottom,
        rgba($color-secondary-light, 0.85),
        rgba($color-secondary-dark, 0.85)
      );
    }
    &-2 {
      background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.85),
        rgba($color-primary-dark, 0.85)
      );
    }
    &-3 {
      background-image: linear-gradient(
        to right bottom,
        rgba($color-tertiary-light, 0.85),
        rgba($color-tertiary-dark, 0.85)
      );
    }
  }
  &__details {
    padding: 3rem;
    ul {
      list-style: none;
      width: 80%;
      margin: 0 auto;
      color: $color-text-light;
      li {
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;
        &:not(:last-child) {
          border-bottom: 1px solid $color-gray-light;
        }
      }
    }
  }
  // back side styling
  &__cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
    &__price-box {
      text-align: center;
      margin-bottom: 8rem;
      color: $color-white;
    }
    &__price-only {
      font-size: 1.4rem;
      text-transform: uppercase;
    }
    &__price-value {
      font-size: 6rem;
      font-weight: 100;
    }
  }
  // @include respond(tab-port)
  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    height: auto;
    border-radius: 5px;
    background: white;
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.2);
    &__side {
      height: auto;
      position: relative;
      box-shadow: none;
      border-top-right-radius: 0;
      &--back {
        transform: rotateY(0);
        clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
      }
    }
    &:hover &__side--front {
      transform: rotateY(0);
    }
    &__details {
      padding: 1rem 3rem;
    }
    // back side styling
    &__cta {
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0);
      width: 100%;
      padding: 7rem 4rem 4rem 4rem;
      &__price-box {
        margin-bottom: 3rem;
      }
      &__price-value {
        font-size: 4rem;
      }
    }
  }
}
</style>
