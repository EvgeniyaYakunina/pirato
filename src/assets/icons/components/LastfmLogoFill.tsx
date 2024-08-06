import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLastfmLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lastfm-logo-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-2 9h-.712a2.5 2.5 0 0 1-2.276-1.466L7.074 6.88A1.5 1.5 0 0 0 5.712 6H5a1.5 1.5 0 0 0-1.5 1.5V9A1.5 1.5 0 0 0 5 10.5h.5a1.5 1.5 0 0 0 1.171-.562.5.5 0 1 1 .78.624A2.49 2.49 0 0 1 5.5 11.5H5A2.5 2.5 0 0 1 2.5 9V7.5A2.5 2.5 0 0 1 5 5h.712a2.51 2.51 0 0 1 2.276 1.466L9.422 9.62a1.5 1.5 0 0 0 1.366.879h.712a1 1 0 0 0 0-2H11A1.75 1.75 0 0 1 11 5h.75A1.25 1.25 0 0 1 13 6.25a.5.5 0 0 1-1 0 .25.25 0 0 0-.25-.25H11a.75.75 0 1 0 0 1.5h.5a2 2 0 0 1 0 4" /></g><defs><clipPath id="lastfm-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLastfmLogoFill);
const Memo = memo(ForwardRef);
export default Memo;