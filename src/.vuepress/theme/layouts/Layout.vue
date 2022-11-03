<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import Dropdown from "../../components/Dropdown.vue";
import { baseApi } from "../../utils/utils";
import { onMounted, ref } from "vue";

let versions = ref(["v3.16", "v3.17"]);

onMounted(() => {
  const originUrl = "https://localhost:44381";
  console.log("输入内容111");
  //请求数据
  try {
    fetch(originUrl + baseApi, {
      method: "GET",
      mode: "cors",
    })
      .then(async (res) => {
        console.log("输入内容222请求");
        if (res.ok) {
          const time = res.json().then((result) => {
            console.log("输入内容333请求 成功 res", result);
            versions.value = result;
          });
        } else {
          console.log("shibai", res);
          versions.value = ["版本1", "版本2"];
        }
      })
      .catch(() => {
        console.log("catch", res);
        versions.value = ["版本1", "版本2"];
      });
  } catch (error) {
    console.log("error", res);
    versions.value = ["版本1", "版本2"];
    console.log(error);
  }
});
</script>

<template>
  <ParentLayout>
    <template #navbar-before>
      V3.16
      <Dropdown :versions="versions" v-if="versions && versions.length > 0"></Dropdown>
    </template>

    <template #page-bottom>
      <div class="my-footer">This is my custom page footer</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
