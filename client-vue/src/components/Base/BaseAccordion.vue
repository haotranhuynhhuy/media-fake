<template>
  <div class="container mx-auto">
    <div class="rounded overflow-hidden">
      <!-- accordion-tab  -->
      <div
        class="accordion-section group outline-none shadow-2 rounded-t-2xl"
        tabindex="1"
      >
        <div
          class="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative border-l-2 bg-gray-100 rounded-t-2xl border-indigo-500 leading-normal"
        >
          <div class="group-focus:text-primary transition ease duration-500">
            1. Đây là dịch vụ do bên nào cung cấp?
          </div>
          <div
            class="absolute duration-500 ease font-bold group-focus:-rotate-180 group-focus:text-primary h-8 icon inline-flex items-center justify-center mb-auto ml-auto mr-2 mt-2 right-0 rounded-full top-0 transform transition w-8"
          >
            <icon-chevron-down />
          </div>
        </div>
        <div
          class="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500"
        >
          <p class="p-2 text-justify">
            Chương trình phúc lợi này được Interloan đồng hành cùng Doanh nghiệp
            triển khai, hỗ trợ Người lao động ứng lương linh hoạt mà cần chờ đến
            ngày nhận lương.
          </p>
        </div>
      </div>
      <!-- accordion-tab -->
      <!-- accordion-tab  -->
      <div class="accordion-section group outline-none shadow-2" tabindex="1">
        <div
          class="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative border-l-2 bg-gray-100 border-indigo-500 leading-normal"
        >
          <div class="group-focus:text-primary transition ease duration-500">
            2. Có được ứng nhiều hơn số tiền đề xuất không?
          </div>
          <div
            class="absolute duration-500 ease font-bold group-focus:-rotate-180 group-focus:text-primary h-8 icon inline-flex items-center justify-center mb-auto ml-auto mr-2 mt-2 right-0 rounded-full top-0 transform transition w-8"
          >
            <icon-chevron-down />
          </div>
        </div>
        <div
          class="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500"
        >
          <p class="p-2 text-justify">
            Người lao động được ứng tối đa 70% lương tạm tính tại thời điểm ứng.
          </p>
        </div>
      </div>
      <!-- accordion-tab -->
      <!-- accordion-tab  -->
      <div class="accordion-section group outline-none shadow-2" tabindex="1">
        <div
          class="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative border-l-2 bg-gray-100 border-indigo-500 leading-normal"
        >
          <div class="group-focus:text-primary transition ease duration-500">
            3. Thời gian duyệt khoản ứng lương là bao lâu?
          </div>
          <div
            class="absolute duration-500 ease font-bold group-focus:-rotate-180 group-focus:text-primary h-8 icon inline-flex items-center justify-center mb-auto ml-auto mr-2 mt-2 right-0 rounded-full top-0 transform transition w-8"
          >
            <icon-chevron-down />
          </div>
        </div>
        <div
          class="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500"
        >
          <p class="p-2 text-justify">
            Thời gian xử lý (Từ lúc nhận thông tin đăng ký ứng đến lúc chuyển
            khoản tiền ứng) tối đa 24h.
          </p>
        </div>
      </div>
      <!-- accordion-tab -->
      <!-- accordion-tab  -->
      <div class="accordion-section group outline-none shadow-2" tabindex="1">
        <div
          class="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative border-l-2 bg-gray-100 border-indigo-500 leading-normal"
        >
          <div class="group-focus:text-primary transition ease duration-500">
            4. Được ứng lương bao nhiêu lần/tháng?
          </div>
          <div
            class="absolute duration-500 ease font-bold group-focus:-rotate-180 group-focus:text-primary h-8 icon inline-flex items-center justify-center mb-auto ml-auto mr-2 mt-2 right-0 rounded-full top-0 transform transition w-8"
          >
            <icon-chevron-down />
          </div>
        </div>
        <div
          class="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500"
        >
          <p class="p-2 text-justify">Không giới hạn số lần ứng trong tháng.</p>
        </div>
      </div>
      <!-- accordion-tab -->
      <!-- accordion-tab  -->
      <div class="accordion-section group outline-none shadow-2" tabindex="1">
        <div
          class="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative border-l-2 bg-gray-100 border-indigo-500 leading-normal"
        >
          <div class="group-focus:text-primary transition ease duration-500">
            5. Hình thức thanh toán thế nào?
          </div>
          <div
            class="absolute duration-500 ease font-bold group-focus:-rotate-180 group-focus:text-primary h-8 icon inline-flex items-center justify-center mb-auto ml-auto mr-2 mt-2 right-0 rounded-full top-0 transform transition w-8"
          >
            <icon-chevron-down />
          </div>
        </div>
        <div
          class="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500"
        >
          <p class="p-2 text-justify">
            Doanh nghiệp sẽ cấn trừ trực tiếp từ lương của Người lao động vào kỳ
            lương gần nhất để thanh toán khoản ứng.
          </p>
        </div>
      </div>
      <!-- accordion-tab -->
      <!-- accordion-tab  -->
      <div
        class="accordion-section group outline-none shadow-2 rounded-b-2xl mb-4"
        tabindex="1"
      >
        <div
          class="group rounded-b-2xl flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative border-l-2 bg-gray-100 border-indigo-500 leading-normal"
        >
          <div class="group-focus:text-primary transition ease duration-500">
            6. Khi có thắc mắc tôi cần liên hệ với ai?
          </div>
          <div
            class="absolute duration-500 ease font-bold group-focus:-rotate-180 group-focus:text-primary h-8 icon inline-flex items-center justify-center mb-auto ml-auto mr-2 mt-2 right-0 rounded-full top-0 transform transition w-8"
          >
            <icon-chevron-down />
          </div>
        </div>
        <div
          class="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500"
        >
          <p class="p-2 text-justify">
            Mời bạn liên hệ team hỗ trợ của Interloan để được giải đáp thắc mắc
            nhé. <br />
            Zalo: 088 616 8088
          </p>
        </div>
      </div>
      <!-- accordion-tab -->
    </div>
  </div>
</template>
<script setup lang="ts">
import IconChevronDown from '@/components/Icons/IconChevronDown.vue';
</script>

<style scoped>
.accordion-section:focus .group {
  color: #28c76f;
  font-weight: bold;
}

.accordion-section:focus .icon {
}

.accordion-section {
  /*border: 1px solid #d3d3d378;*/
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[type='button'],
[type='reset'],
[type='submit'],
button {
  -webkit-appearance: button;
}

[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

[hidden],
template {
  display: none;
}

blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
  margin: 0;
}

button {
  background-color: transparent;
  background-image: none;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

fieldset,
ol,
ul {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

*,
:after,
:before {
  box-sizing: border-box;
  border: 0 solid #e2e8f0;
}

hr {
  border-top-width: 1px;
}

img {
  border-style: solid;
}

textarea {
  resize: vertical;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #a0aec0;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #a0aec0;
}

input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: #a0aec0;
}

input::placeholder,
textarea::placeholder {
  color: #a0aec0;
}

[role='button'],
button {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}

code,
kbd,
pre,
samp {
  font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
}

audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
  vertical-align: middle;
}

img,
video {
  max-width: 100%;
  height: auto;
}

.container {
  width: 100%;
}

.rounded-full {
  border-radius: 9999px;
}

.border {
  border-width: 1px;
}

.h-8 {
  height: 2rem;
}

.m-8 {
  margin: 2rem;
}

.max-h-0 {
  max-height: 0;
}

.group:focus .group-focus\:max-h-screen {
  max-height: 100vh;
}

.outline-none {
  outline: 0;
}

.overflow-hidden {
  overflow: hidden;
}

.transform {
  --transform-translate-x: 0;
  --transform-translate-y: 0;
  --transform-rotate: 0;
  --transform-skew-x: 0;
  --transform-skew-y: 0;
  --transform-scale-x: 1;
  --transform-scale-y: 1;
  transform: translateX(var(--transform-translate-x))
    translateY(var(--transform-translate-y)) rotate(var(--transform-rotate))
    skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
    scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
}

.group:focus .group-focus\:-rotate-180 {
  --transform-rotate: -180deg;
}

.transition {
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
}

.duration-500 {
  transition-duration: 0.5s;
}
</style>
