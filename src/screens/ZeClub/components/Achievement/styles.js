import styled from 'styled-components/native';

export const Achievement = styled.View``

export const MostRecentContainer = styled.View``

export const MostRecentText = styled.View`
    text-align: left;
    font-size: 30px;
    margin-top: 10px;
    margin-left: 15px;
`

export const MostRecent = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 10,
  },
}))`
  height: 200px;
  margin-top: 10px;
`

export const MostRecentItem = styled.View`
    width: 290px;
    height: 100%;
    margin-right: 10px;
    background-color: red;
`

export const MostRecentItemIMG = styled.Image`
    height: 100%;
    width: 100%;
`

export const TrophiesContainer = styled.View`
    margin-top: 15px;
`

export const TrophiesText = styled.View`
    text-align: left;
    font-size: 30px;
    margin-left: 15px;
`

export const TrophiesItemContainer = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const TrophiesItem = styled.View`
    width: 85px;
    margin: 15px 10px;
    height: 85px;
    background-color: black;
`

export const BrandContainer = styled.View`
    margin-top: 10px;
`

export const BrandText = styled.View`
    text-align: left;
    font-size: 30px;
    margin-left: 15px;
`

export const BrandItemContainer = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const BrandItem = styled.View`
    width: 85px;
    margin: 15px 10px;
    height: 85px;
    background-color: pink;
`