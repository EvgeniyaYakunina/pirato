import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCrownCrossFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#crown-cross-fill_svg__a)"><path fill="#000" d="M8 5.201a3.4 3.4 0 0 0-.5-.628V2.5h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 1 1 0 1h-1v2.073c-.191.188-.359.4-.5.628M11.25 3.5c-1.109 0-2.076.405-2.75 1.072V11a.5.5 0 0 1-1 0V4.573C6.826 3.904 5.859 3.5 4.75 3.5A3.754 3.754 0 0 0 1 7.25c0 1.866.909 3.053 1.67 3.72.401.349.849.64 1.33.864V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.166a5.7 5.7 0 0 0 1.33-.864C14.09 10.303 15 9.116 15 7.25a3.755 3.755 0 0 0-3.75-3.75" /></g><defs><clipPath id="crown-cross-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCrownCrossFill);
const Memo = memo(ForwardRef);
export default Memo;