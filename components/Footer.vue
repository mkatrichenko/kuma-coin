<template>
  <div class="footer__container">
    <div class="container">
      <div class="left">
        <h3 class="footer__title">{{ title }}</h3>
        <div class="footer__inner">
          <h4>{{ inner }}</h4>
        </div>
        <p class="footer__text">{{ text }}</p>
      </div>
      <div class="footer__vector">
        <img src="../assets/img/vector-footer.png" alt="" />
      </div>
      <div class="right">
        <div class="footer__btn">
          <BaseButton :link="btn.link" :label="btn.label" size="md" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/Button.vue";

export default {
  name: "Header",
  components: {
    BaseButton,
  },
  data() {
    return {
      title: "The Team",
      inner: "We are hiring! Feel free to contact.",
      text:
        "Kuma Inu is hiring developers. We are always happy to expand the team!",
      btn: {
        label: "Contact Us",
        link: "mailto:contact@kumatoken.com",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.footer__container {
  max-width: 1376px;
  background: #f6a32f;
  border-radius: 16px;
  margin: 0 auto 32px;
}

.container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 854px;
  margin: 0 auto;
  padding: 72px 0 83px;

  @media screen and (max-width: 767px) {
	align-items: center;
	padding: 16px;
  }
}
.footer__title {
  font-family: "Patrick";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  color: #ffffff;
  margin: 0 0 10px;
}
.footer__inner {
  margin-top: -20px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
}
.footer__text {
  padding-top: 28px;
  font-family: "Quicksand";
  font-weight: 500;
font-size: 14px;
line-height: 24px;
  color: #ffffff;
  margin: 0;
  max-width: 346px;
  text-align: center;
}
.footer__btn {
	margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__vector {
  padding-top: 60px;
  margin-right: 50px;
}


// Responsive

/* 992px - 1200px */
@media screen and (max-width: 1200px) {
  .footer__container {
    width: 960px;
  }
	.container {
		flex-direction: column;
		align-items: center;
	}
	.footer__vector {
		display: none;
	}
	.footer__text {
		padding: 25px;
	}
	.footer__btn {
		margin: 0px 0 30px 0;
	}
}

/* 768px - 992px */
@media screen and (max-width: 992px) {
  .footer__container {
    width: 720px;
  }
	.container {
		flex-direction: column;
	}
	.footer__vector {
		display: none;
	}
	.footer__text {
		padding: 25px;
	}
	.footer__btn {
		margin: 0px 0 30px 0;
	}
}

/* 576px - 768px */
@media screen and (max-width: 768px) {
  .footer__container {
    width: 540px;
  }
	.container {
		flex-direction: column;
		align-items: center;
	}
	.footer__vector {
		display: none;
	}
	.footer__text {
		padding: 25px;
	}
	.footer__btn {
		margin: 0px 0 30px 0;
	}
}

/* 0 - 576px */
@media screen and (max-width: 576px) {
  .footer__container {
    width: 90%;
  }
	.container {
		flex-direction: column;
	}
	.footer__vector {
		display: none;
	}
	.footer__text {
		padding: 25px;
	}
	.footer__btn {
		margin: 0px 0 30px 0;
	}
}
</style>
