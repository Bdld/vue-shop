import { getCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  // 获取分类数据
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => getCategory());

  // 路由参数变化的时候，可以把分类数据接口重新发送
  onBeforeRouteUpdate(to => {
    console.log(to);
    getCategory(to.params.id);
  });
  return {
    categoryData,
  };
}
