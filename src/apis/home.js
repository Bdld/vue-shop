import http from "@/utils/http";

// 获取banner
export default function getBannerAPI() {
  return http({
    url: "/home/banner",
  });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */

export const findNewAPI = () => {
  return http({
    url: "/home/new",
  });
};

export const findHotAPI = () => {
  return http({
    url: "/home/hot",
  });
};
