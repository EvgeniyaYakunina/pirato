import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPatreonLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#patreon-logo-fill_svg__a)"><path fill="#000" d="M14.5 5.823c0 2.563-1.856 3.28-3.347 3.854-.526.203-1.022.394-1.388.643-.712.482-1.162 1.361-1.597 2.211C7.547 13.745 6.904 15 5.47 15c-.807 0-1.538-.727-2.116-2.104-.577-1.376-.894-3.187-.85-4.84.067-2.541.911-3.918 1.606-4.625.934-.95 2.203-1.582 3.668-1.825 1.361-.227 2.758-.087 3.933.393 1.772.726 2.789 2.12 2.789 3.824" /></g><defs><clipPath id="patreon-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPatreonLogoFill);
const Memo = memo(ForwardRef);
export default Memo;