"use client";
export function RadialGaugeChart({maxValue=5, value=3.5}: {maxValue: number, value: number}) {
  const percentage = value / maxValue;
  const degrees = percentage * 360;

  return (
    <>
      <div className="relative w-64 h-64 mx-auto">
        {/* Full circle with gradient and mask based on value */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(
                red,orange,yellow,green,green
              )`,
            maskImage: `conic-gradient(white 0deg, white ${degrees}deg, transparent ${degrees}deg, transparent 360deg)`,
            WebkitMaskImage: `conic-gradient(white 0deg, white ${degrees}deg, transparent ${
              degrees + 20
            }deg, transparent 360deg)`,
          }}
        />

        {/* Inner black circle to create the ring effect */}
        <div className="absolute inset-6 rounded-full bg-background" />

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-5xl font-bold">{value.toFixed(1)}</div>
          <div className="text-muted-foreground">out of {maxValue}</div>
        </div>
        
      </div>
      {value>maxValue?<div className="mx-auto text-red-500">Value Exceeded than Overall  </div>:null}
    </>
  );
}