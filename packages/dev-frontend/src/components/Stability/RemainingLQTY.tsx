import React from "react";
import { Flex } from "theme-ui";

import { LiquityStoreState } from "lib-base-u";
import { useLiquitySelector } from "lib-react-u";

const selector = ({ remainingStabilityPoolLQTYReward }: LiquityStoreState) => ({
  remainingStabilityPoolLQTYReward
});

export const RemainingLQTY: React.FC = () => {
  const { remainingStabilityPoolLQTYReward } = useLiquitySelector(selector);

  return (
    <Flex sx={{ mr: 2, fontSize: 2, fontWeight: "medium" }}>
      {remainingStabilityPoolLQTYReward.prettify(0)} LQTY remaining
    </Flex>
  );
};
