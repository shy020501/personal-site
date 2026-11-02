import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return ["/case-study/amazon_robotics", "/case-studies/amazon_robotics"].map(
      (source) => ({
        source,
        destination: "/case-studies/amazon-robotics",
        permanent: true,
      }),
    );
  },
};

export default nextConfig;
