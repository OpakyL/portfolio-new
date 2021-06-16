<template>
  <div class="container">
    <div class="contacts">
      <contact>
        <template v-slot:image>
          <a target="_blank" href="https://t.me/OpakyLTheSlayer"
            ><img src="@/assets/img/contacts/telegram.webp" alt="telegram"
          /></a>
        </template>
        <template v-slot:text>Telegram</template>
      </contact>
      <contact>
        <template v-slot:image>
          <a href="tel:+79210939066"
            ><img src="@/assets/img/contacts/phone.webp" alt="phone"
          /></a>
        </template>
        <template v-slot:text>+7 921 093-90-66</template>
      </contact>
      <contact>
        <template v-slot:image>
          <a href="mailto:diedara@mail.ru"
            ><img src="@/assets/img/contacts/mail.png" alt="mail"
          /></a>
        </template>
        <template v-slot:text>diedara@mail.ru</template>
      </contact>
      <contact>
        <template v-slot:image
          ><img src="@/assets/img/contacts/discord.png" alt="discord"
        /></template>
        <template v-slot:text>OpakyL#9462</template>
      </contact>
      <contact>
        <template v-slot:image>
          <a href="https://vk.com/opakyltheslayer" target="_blank"
            ><img src="@/assets/img/contacts/vk.svg" alt="vk"
          /></a>
        </template>
        <template v-slot:text>VK</template>
      </contact>
    </div>
  </div>
</template>

<script>
import Contact from "@/components/Contact";
export default {
  name: "Contacts",
  components: { Contact },
};
</script>

<style lang="scss">
.contacts {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contact {
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
  }
}
@media screen and (max-width: 480px) {
  .contacts {
    align-items: flex-start;
    position: relative;
    top: 0;
    left: 0;
    transform: none;
  }
}
</style>
