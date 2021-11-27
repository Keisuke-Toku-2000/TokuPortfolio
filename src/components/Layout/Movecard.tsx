import React, { ReactNode, useEffect, useState } from "react";

export const useBorderRadius = (initialVal: number): number => {
  const [borderRadius, setBorderRadius] = useState(initialVal);
  let plusFlag = true;
  useEffect(() => {
    const interval = setInterval(() => {
      setBorderRadius((c) => {
        if (plusFlag) {
          if (c > 40) {
            plusFlag = false;
          }
          return c + 0.05;
        } else {
          if (c < 0) {
            plusFlag = true;
          }
          return c - 0.05;
        }
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);
  return borderRadius;
};

type MovecardProps = {
  lt: number;
  rt: number;
  lb: number;
  rb: number;
};

export const Movecard: React.VFC<MovecardProps & { children?: ReactNode }> = ({
  lt,
  rt,
  lb,
  rb,
  children,
}) => {
  const radius1 = useBorderRadius(lt);
  const radius2 = useBorderRadius(rt);
  const radius3 = useBorderRadius(lb);
  const radius4 = useBorderRadius(rb);

  let card: object = {
    textAlign: "center",
    backgroundColor: "#D7EEFF",
    paddingTop: "2%",
    paddingBottom: "3%",
    margin: "0 auto",
    marginTop: "5%",
    width: "90%",
    borderRadius: `${radius1}% ${radius2}% ${radius3}% ${radius4}%`,
  };
  return <div style={card}>{children}</div>;
};
