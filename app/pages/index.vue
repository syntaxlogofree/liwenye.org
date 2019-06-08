<template>
<div>
  <section class="section is-large">
    <div class="has-text-centered">
      <h2 class="subtitle">
        passion to improve quality of life
      </h2>
    </div>
  </section>
  <section class="section is-large">
        <div class="container">
            <div class="columns is-multiline">
                <div
                    class="column is-one-quarter"
                    v-for="(article, index) in articles"
                    :key="index">
                        <a :href="article.url" target="_blank">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-3by2">
                                        <img :src="article.urlToImage" :alt="article.title">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">{{ article.title }}</div>
                                </div>
                            </div>
                        </a>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
    export default {
        async asyncData({ app }) {
            const { articles } = await app.$axios.$get(
                `https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${
                    process.env.API_KEY
                }`
            );

            return { articles };
        },
    };
</script>

<style lang="scss">
p{
  color: $primary;
  margin-bottom: 2rem;
}




</style>
