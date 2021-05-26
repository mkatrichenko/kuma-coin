<template>
  <div class="direction">
    <div class="direction__container container">
      <h2 class="title__direction">
        Our <span class="orange">Direction</span>
      </h2>
      <h3 class="inner__direction">
        {{ inner }}
      </h3>
      <div class="text__direction">
        {{ text }}
      </div>
      <div class="img__direction">
        <img src="../assets/img/direction.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inner: "Whitepaper",
      text:
        "Our direction is simple: we want to keep this token useful and valuable. To achieve that we have planned few decentralized apps that will increase the value of $KUMA and grow the community. We did not use any advanced functions in our tokenomics because we want to keep it as simple as possible and fully focus on bringing practical use of $KUMA token in our future decentralized applications.",
    };
  },
};
</script>

<style lang="scss" scoped>
.direction {
  padding-bottom: 110px;
}
.direction__container {
  background: #ffffff;
  border: 3px solid #e8891d;
  box-sizing: border-box;
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}
.title__direction {
  font-family: "Patrick";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 65px;
  margin: 0 0 16px;

  .orange {
    color: var(--brand);
  }

  @media screen and (max-width: 767px) {
    h2 {
      font-size: 36px;
      line-height: 1.3;
      margin: 0;
    }
  }
}
.inner__direction {
  font-family: "Quicksand";
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin: 0 0 16px;

  @media screen and (max-width: 767px) {
    h3 {
      font-size: 18px;
      line-height: 1.3;
      margin: 16px 0 12px;
    }
  }
}
.text__direction {
  display: flex;
  justify-content: center;
  max-width: 712px;
  font-family: "Quicksand";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  @media screen and (max-width: 767px) {
    p {
      margin: 0;
    }
  }
}
.img__direction {
  position: absolute;
  bottom: -175px;
  right: -140px;
  z-index: 2;
  width: 294px;

  img {
    width: 100%;
  }
}

@media screen and (max-width: 1200px) {
  .img__direction {
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 0;
    right: 0;
  }
  .text__direction {
    padding: 0 15px;
  }
}

/* 768px - 992px */
@media screen and (max-width: 992px) {
  .img__direction {
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 0;
    right: 0;
  }
  .text__direction {
    padding: 0 15px;
  }
}

/* 576px - 768px */
@media screen and (max-width: 768px) {
  .img__direction {
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 0;
    right: 0;
  }
  .text__direction {
    padding: 0 15px;
  }
}

/* 0 - 576px */
@media screen and (max-width: 576px) {
  .direction {
    padding: 0 10px;
    padding-bottom: 30px;
    margin: 32px 0;
  }
  .img__direction {
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 0;
    right: 0;
    width: 120px;
    margin-top: 16px;

    img {
      width: 100%;
    }
  }
  .text__direction {
    padding: 0 15px;
  }
  .title__direction {
    h2 {
      font-size: 32px;
    }
  }
}
</style>
