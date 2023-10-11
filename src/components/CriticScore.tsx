import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  let color = score >= 90 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize={14} paddingX={2} borderRadius={5} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
