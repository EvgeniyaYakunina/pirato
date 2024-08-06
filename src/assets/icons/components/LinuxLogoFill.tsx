import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLinuxLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#linux-logo-fill_svg__a)"><path fill="#000" d="M10.076 13.109a.25.25 0 0 1-.207.391H6.131a.25.25 0 0 1-.207-.391 2.5 2.5 0 0 1 4.152 0m4.308.21a.52.52 0 0 1-.402.181h-2.447a.25.25 0 0 1-.235-.166 3.5 3.5 0 0 0-6.6 0 .25.25 0 0 1-.234.166H2.014a.51.51 0 0 1-.4-.183.5.5 0 0 1-.005-.63c.004-.004.478-.61.945-1.794C2.986 9.8 3.5 7.977 3.5 5.5a4.5 4.5 0 1 1 9 0c0 2.478.514 4.3.946 5.393.467 1.183.94 1.79.945 1.796a.5.5 0 0 1-.007.63M5.5 6.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0m4.948 2.026a.5.5 0 0 0-.671-.223L8 8.94l-1.776-.889a.5.5 0 0 0-.447.896l2 1a.5.5 0 0 0 .447 0l2-1a.5.5 0 0 0 .223-.672M10.5 6.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0" /></g><defs><clipPath id="linux-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLinuxLogoFill);
const Memo = memo(ForwardRef);
export default Memo;