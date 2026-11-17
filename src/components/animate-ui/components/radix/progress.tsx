
import {
  Progress as ProgressPrimitive,
  ProgressIndicator as ProgressIndicatorPrimitive,
  type ProgressProps as ProgressPrimitiveProps,
} from '@/components/animate-ui/primitives/radix/progress';
import { cn } from '@/lib/utils';

type ProgressProps = ProgressPrimitiveProps;

function Progress({ className, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive
      className={cn(
        // mirrored in RTL so the bar fills from the reading start, like the app's other progress bars
        'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full rtl:-scale-x-100',
        className,
      )}
      {...props}
    >
      {/* initial={false}: mount at the real value instead of springing down from a full bar */}
      <ProgressIndicatorPrimitive initial={false} className="bg-primary rounded-full h-full w-full flex-1" />
    </ProgressPrimitive>
  );
}

export { Progress, type ProgressProps };
