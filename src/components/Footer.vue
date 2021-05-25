<template>
  <div class="footer__container">
    <div class="container">
      <div class="left">
        <div class="footer__title">
          <h3>{{ title }}</h3>
        </div>
        <div class="footer__inner">
          <h4>{{ inner }}</h4>
        </div>
        <div class="footer__text">
          <h5>{{ text }}</h5>
        </div>
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
        link: "#",
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
  margin: 0 auto;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
}
.footer__title {
  font-family: "Patrick";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  color: #ffffff;
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
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
}
.footer__btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__vector {
  padding-top: 125px;
}


// Responsive

/* 992px - 1200px */
@media screen and (max-width: 1200px) {
  .footer__container {
    width: 960px;
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
