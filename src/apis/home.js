import http from "@/utils/http";

// 获取banner
export default function getBannerAPI(params = {}) {
  const { distributionSite = "1" } = params;
  return http({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}

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

export const getGoodsAPI = () => {
  return http({
    url: "/home/goods",
  });
};
