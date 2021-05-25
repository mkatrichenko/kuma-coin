<template>
  <div class="direction">
    <div class="direction__container container">
      <div class="title__direction">
        <h2>{{ title }}</h2>
      </div>
      <div class="inner__direction">
        <h3>{{ inner }}</h3>
      </div>
      <div class="text__direction">
        <p>{{ text }}</p>
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
      title: "Our Direction",
      inner: "Whitepaper",
      text:
        "Our direction is simple: we want to keep this token useful and valuable. To achieve that we have planned few decentralized apps that will increase the value of $KUMA and grow the community. We did not use any advanced functions in our tokenomics because we want to keep it as simple as possible and fully focus on bringing practical use of $KUMA token in our future decentralized applications.",
    };
  },
};
</script>

<style lang="scss" scoped>
.direction {
	padding-top: 200px;
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
}
.title__direction {
  font-family: "Patrick";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 65px;

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
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;

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
  font-style: normal;
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
  top: 210px;
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
	.direction{
		padding: 0 10px;
		padding-bottom: 30px;
		padding-left: 30px;
	}
	.img__direction {
		display: flex;
		justify-content: space-around;
		position: relative;
		top: 0;
    right: 0;
    width: 120px;

    img {
      width: 100%;
    }
	}
	.text__direction {
		padding: 0 15px;
	}
}
</style>
