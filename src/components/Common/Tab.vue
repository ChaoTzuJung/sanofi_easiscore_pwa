<script>
export default {
  name: 'Tab',
  components: {
  },
  props: {
    tabs: {
      require: true,
      type: Object,
    },
    current: {
      require: false,
      type: String,
      default: 'HeadNeckSection',
    },
  },
  data() {
    return {
      currentTabComponent: 'HeadNeckSection',
      canCheckTab: false,
    };
  },
  computed: {
    valid() {
      return tab => !tab.complete && tab.name !== 'Result' && this.canCheckTab;
    },
    allTabComplete() {
      return Object.values(this.tabs).every(item => item.complete === true);
    },
  },
  watch: {
    // 針對桌機版 Get result 點擊後，TAB 需要自動切換到 Result Tab
    current() {
      this.currentTabComponent = this.current;
    },
  },
  methods: {
    changeTab(tab) {
      // NOTE:
      // if (tab.name === 'Result' && !this.allTabComplete) {
      //   this.canCheckTab = true;
      //   return;
      // }

      this.currentTabComponent = tab.component; // 單純切換 Tab active 樣式
      this.$emit('changeTab', tab);
    },
    changeBodyScore(e) {
      this.tabs[this.currentTabComponent].score = parseFloat(e, 10).toFixed(1);
    },
  },
};
</script>

<template>
  <div class="tabs">
    <div
      v-for="tab in Object.values(tabs)"
      :key="tab.name"
      class="tab"
      :class="{
        'active': tab.component === currentTabComponent,
        'valid': valid(tab)
      }"
      @click="changeTab(tab)"
      @keyup.enter="changeTab(tab)"
    >
      <div class="tab-area">
        <div class="no" :class="{'checked': tab.complete}">
          <div class="ball" v-if="!tab.complete">{{tab.id}}</div>
        </div>
        <div class="wordings">
          <div class="text">{{tab.name}}</div>
          <div v-if="tab.hasOwnProperty('score')" class="score">score: {{tab.score}}</div>
        </div>
      </div>
      <div
        class="valid-text"
        v-if="valid(tab)"
      >
        *Required fields.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  display: flex;
  height: 80px;
  padding: 0 20px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (max-width: 769px) {
      display: none;
  }

  // tab active style
  & > .active {
    width: 184px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

    & > .tab-area {
      & > .no {
        border: solid 1px #525ca3;
        color: #525ca3;
      }

      & > .wordings {
        & > .text {
          color: #000000;
          font-weight: bold;
        }
      }
    }
  }

  & > .tab {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    width: 176px;
    height: 80px;
    padding: 16px 10px;
    margin-right: 12px;
    margin-bottom: 40px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    line-height: 1.5;
    color: #a77f7f;
    font-family: Arial;
    font-size: 16px;
    cursor: pointer;

    & > .tab-area {
      display: flex;
      align-items: flex-start;

      & > .no {
        position: relative;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        border-radius: 50%;
        font-family: Arial;
        font-size: 11.7px;
        line-height: 18px;
        text-align: center;
        border: solid 1px rgba(0, 0, 0, 0.15);
        color: rgba(0, 0, 0, 0.5);

        & > .ball {
          line-height: 20px;
        }
      }

      & > .checked {
        background-color: #bcbc1c;
        border: 2px solid #bcbc1c;
      }

      & .checked::after {
        content: "";
        position: absolute;
        top: 0;
        width: 6px;
        height: 12px;
        border: solid white;
        border-width: 0 1px 1px 0;
        -webkit-transform: rotate(45deg) translate(-3px, 1px);
        -ms-transform: rotate(45deg) translate(-3px, 1px);
        transform: rotate(45deg) translate(-3px, 1px);
      }

      & > .wordings {
        & > .text {
          font-size: 15px;
          transform: translateY(-2px);
        }

        & > .score {
          font-family: Arial;
          font-size: 16px;
          font-weight: normal;
          line-height: 1.5;
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }

    & > .valid-text {
      font-family: Arial;
      font-size: 14px;
      line-height: 1.57;
      color: #ea5d45;
      position: absolute;
      top: 86px;
    }
  }

  & > .valid {
      border: solid 1px #ea5d45;
  }
}
</style>
