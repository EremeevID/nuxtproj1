<template>
  <section>
    <h1>Hello world</h1>

    <b-btn variant="light" @click="toggleShowBooks">
      <span v-if="showBooks">Hide Books</span>
      <span v-else>Show Books</span>
    </b-btn>

    <b-btn pill variant="info" :href="url" target="_blank">test website</b-btn>

    <div v-if="showBooks">
      <ul>
        <li v-for="(book, testkey1) in books" :key="testkey1" :class="{ fav: book.isFav }" @click="toggleFav(book)">
          <img :src="book.img" :alt="book.title">
          <h3>{{ book.title }}</h3>
          <p>{{ book.author }}</p>
        </li>
      </ul>        
    </div>

    <br>

    <p>Счетчик: {{$store.state.counter.counter}} </p>

    <b-btn @click="$store.commit('counter/increment')">Добавить</b-btn>

    <br>

    <div class="box" @mouseover="handleEvent">mouseover (enter)</div>
    <div class="box" @mouseleave="handleEvent">mouseleave</div>
    <div class="box" @dblclick="handleEvent">doubleclick</div>
    <div class="box" @mousemove="handleMousemove">position - {{x}} {{y}}</div>

  </section>
</template>

<script src="~/components/main.js"></script>

