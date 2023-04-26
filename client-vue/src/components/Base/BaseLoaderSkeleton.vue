<template>
  <div class="a-salary-advance shadow-2">
    <ul class="o-vertical-spacing o-vertical-spacing--l">
      <li class="blog-post o-media">
        <div class="o-media__body">
          <div class="o-vertical-spacing">
            <h3 class="blog-post__headline">
              <span class="skeleton-box" style="width: 45%"></span>
            </h3>
            <p>
              <span class="skeleton-box" style="width: 80%"></span>
              <span class="skeleton-box" style="width: 40%"></span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.skeleton-box {
  display: block;
  margin-bottom: 8px;
  border-radius: 1em;
  height: 0.8em;
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;

  &:last-child {
    margin-bottom: 0;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}

.blog-post {
  &__headline {
    .skeleton-box {
      height: 1.4em;
    }

    font-size: 1.25em;
    font-weight: bold;
  }

  &__meta {
    font-size: 0.85em;
    color: rgba(0, 0, 0, 0.12);
  }
}

// OBJECTS
.o-media {
  display: flex;

  &__body {
    flex-grow: 1;
  }
}

.o-vertical-spacing {
  > * + * {
    margin-top: 0.75em;
  }

  &--l {
    > * + * {
      margin-top: 2em;
    }
  }
}

.a-salary-advance {
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  background: white;
}
</style>
