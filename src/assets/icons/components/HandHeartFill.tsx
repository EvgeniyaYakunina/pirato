import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHandHeartFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hand-heart-fill_svg__a)"><path fill="#000" d="M14.396 8.816a1.52 1.52 0 0 0-1.164-.298C14.407 7.333 15 6.155 15 5c0-1.654-1.33-3-2.966-3A2.97 2.97 0 0 0 9.75 3.047 2.97 2.97 0 0 0 7.466 2C5.831 2 4.5 3.346 4.5 5c0 .688.202 1.356.629 2.063-.35.088-.668.27-.922.525L2.793 9H1a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h6.5a.5.5 0 0 0 .121-.015l4-1a1 1 0 0 0 .075-.025l2.429-1.034.027-.012a1.538 1.538 0 0 0 .246-2.598zm-.682 1.697-2.375 1.011-3.902.976H3.5V9.707l1.414-1.414A1 1 0 0 1 5.621 8H8.75a.75.75 0 0 1 0 1.5H7a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .112-.012l4.187-.964.02-.005a.537.537 0 0 1 .393.994z" /></g><defs><clipPath id="hand-heart-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHandHeartFill);
const Memo = memo(ForwardRef);
export default Memo;