import { blue } from '@ant-design/colors';
import { Col, Row } from 'antd';
import styled from 'styled-components';

export const RawLogViewContainer = styled(Row)<{
	$isDarkMode: boolean;
	$highlighted: boolean;
}>`
	width: 100%;
	font-weight: 700;
	font-size: 0.625rem;
	line-height: 1.25rem;
	position: relative;
	transition: background-color 0.2s ease-in;
	background-color: ${({ $highlighted }): string =>
		$highlighted ? 'rgba(255,255,255,0.1)' : 'rgba(0, 0, 0, 0.1)'};

	&:hover {
		background-color: ${({ $isDarkMode }): string =>
			$isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0, 0, 0, 0.1)'};
	}
`;

export const ExpandIconWrapper = styled(Col)`
	color: ${blue[6]};
	padding: 0.25rem 0.375rem;
	cursor: pointer;
	font-size: 12px;
`;

interface RawLogContentProps {
	linesPerRow: number;
}

export const RawLogContent = styled.div<RawLogContentProps>`
	margin-bottom: 0;
	font-family: Fira Code, monospace;
	font-weight: 300;

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: ${(props): number => props.linesPerRow};
	line-clamp: ${(props): number => props.linesPerRow};
	-webkit-box-orient: vertical;

	font-size: 1rem;
	line-height: 2rem;

	cursor: pointer;
`;

export const AddButtonWrapper = styled.div`
	position: absolute;
	top: -4px;
	right: 6px;
	display: flex;
	gap: 6px;

	button {
		border-radius: 5px;
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
