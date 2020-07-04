import styled from 'styled-components/native';

export const History = styled.View``

export const HistoryLevelContainer = styled.View`
    display: flex;
    justify-content: space-between;
    height: 100px;
    padding-bottom: 10px;
    borderBottomColor: gray;
    borderBottomWidth: 0.5px;
`

export const HistoryLevelLeft = styled.View`
    display: flex;
    flex-direction: row;
    height: 100%;
`

export const HistoryLevelLeftImg = styled.Image`
    height: 100%;
    width: 100px;
`

export const HistoryLevelLeftText = styled.View`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-top: 10px;
    margin-left: 10px;
`

export const HistoryLevelLeftTextTittle = styled.View`
    font-size: 40px;
    margin-bottom: 10px;
`

export const HistoryLevelLeftTextDesc = styled.View`
    font-size: 40px;
`

export const HistoryItemContainer = styled.View`
    display: flex;
    flex-direction: row;
    height: 100px;
    padding-bottom: 10px;
    borderBottomColor: gray;
    borderBottomWidth: 0.5px;
    margin-top: 10px;
`

export const HistoryItemLeftArea = styled.View`
    height: 100%;
    width: 100px;
`

export const HistoryItemRightArea = styled.View`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-left: 10px;
    height: 100%;
`

export const HistoryItemTittle = styled.View`
    font-size: 40px;
    margin-bottom: 10px;
`

export const HistoryItemDesc = styled.View`
    font-size: 20px;
`