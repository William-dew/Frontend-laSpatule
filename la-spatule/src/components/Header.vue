<template>
  <header class="header" :class="{ 'logo-only': !isConnected }">
    <h1 class="header__title">La Spatule</h1>
    <div v-if="isConnected" class="header__profil" @click="toggleMenu">
      <img src="..\assets\images\45618.png" alt="" />
      <div>{{ username }}</div>
    </div>
    <div v-if="menuShow" class="header__menu">
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'invitFriend' }"
              >Inviter un ami</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'invitFriend' }">Profil</router-link>
          </li>
          <li @click="disconnect">Déconnexion</li>
          <li @click="toggleMenu">Fermer le menu</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "Header",
  data() {
    return {
      menuShow: false,
    };
  },
  computed: {
    isConnected() {
      // on récupère l'état de connexion (booléen) depuis le state
      return this.$store.state.isUserConnected;
    },
    username() {
      return this.$store.state.username;
    },
  },
  methods: {
    toggleMenu() {
      this.menuShow = !this.menuShow;
    },
    disconnect() {
      AuthenticationService.disconnectUser();
      this.toggleMenu();
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/colors.scss";
.header {
  height: 3.5rem;
  background-color: $colorHeader;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 10px 0px black;
  border-radius: 0 0 5px 5px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  &__title {
    color: $colorTextLight;
    margin: 1rem;
  }

  &.logo-only {
    justify-content: center;
  }
  &__profil {
    margin: 1rem;
    color: $colorTextLight;
    display: flex;
    flex-direction: column;
    img {
      width: 30px;
      align-self: center;
    }
  }
  &__menu {
    position: fixed;
    right: 10px;
    top: 30px;
    nav {
      background-color: rgba($color: grey, $alpha: 0.8);
      border-radius: 0.8rem;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      a,
      li {
        text-decoration: none;
        color: black;
        margin-bottom: 1rem;
        cursor: pointer;
      }
    }
  }
}
</style>
