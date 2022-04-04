import { useState } from "react";
import { Popover, Text, Badge } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface InfoIconProps {
	content: string;
}

const InfoIcon = ({ content }: InfoIconProps) => {
	const [opened, setOpened] = useState(false);
	const breakMobile = useMediaQuery("(max-width: 480px)");

	return (
		<Popover
			opened={opened}
			onClose={() => setOpened(false)}
			position='top'
			placement='start'
			trapFocus={false}
			closeOnEscape={false}
			transition='pop-top-left'
			width={260}
			styles={{ body: { pointerEvents: "none" } }}
			target={
				<div
					onMouseEnter={() => setOpened(true)}
					onMouseLeave={() => setOpened(false)}
					onClick={() => setOpened(!opened)}
					style={breakMobile ? { marginLeft: "6px", width: "14px", height: "14px" } : { marginLeft: "8px", width: "18px", height: "18px" }}
				>
					<svg
						focusable='false'
						preserveAspectRatio='xMidYMid meet'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 32 32'
						aria-hidden='true'
					>
						<path
							fill='none'
							d='M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z'
							data-icon-path='inner-path'
						></path>
						<path d='M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z'></path>
					</svg>
				</div>
			}
		>
			<Text size='sm'>{content}</Text>
		</Popover>
	);
};

export default InfoIcon;
