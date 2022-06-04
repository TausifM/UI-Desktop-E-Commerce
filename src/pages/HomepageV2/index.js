import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Slider } from "components/Slider";
import { PagerIndicator } from "components/PagerIndicator";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";

const HomepageV2Page = () => {
  const navigate = useNavigate();

  const handleNavigate7 = () => navigate("/homepagev3");

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]"
        onClick={handleNavigate7}
      >
        <header className="w-[100%]">
          <Column className="bg-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]">
            <Row className="items-center justify-start mx-[auto] w-[85%]">
              <Row className="items-center justify-start mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[7%]">
                <Image
                  src="img_group19_1.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                  alt="Group19"
                />
                <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Elliye`}</Text>
              </Row>
              <Row className="bg-white_A700 border-2 border-gray_50 border-solid items-center justify-center lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[239px] xl:ml-[274px] 2xl:ml-[308px] 3xl:ml-[370px] ml-[411px] w-[36%]">
                <Text className="cursor-pointer hover:font-normal font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic opacity-op5 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 hover:text-gray_800">{`Search here`}</Text>
                <Image
                  src="img_search.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[231px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[357px] ml-[397px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="search"
                />
              </Row>
              <Image
                src="img_icon_5.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[15px] mb-[17px] lg:mb-[9px] lg:ml-[177px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] ml-[304px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain w-[5%]"
                alt="icon"
              />
              <Button className="bg-gray_800 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:py-[10px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] py-[17.205px] text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-white_A700 w-[7%]">{`Login`}</Button>
            </Row>
            <Line className="bg-gray_50 h-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] w-[85%]" />
            <Row className="items-center justify-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] mx-[auto] w-[41%]">
              <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Categories`}</Text>
              <Text className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`New Arrival`}</Text>
              <Text className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Features`}</Text>
              <Text className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Collections`}</Text>
              <Text className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Discount`}</Text>
            </Row>
          </Column>
        </header>
        <Stack className="lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] h-[750px] w-[100%]">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            slidesToShow={1}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="absolute inset-[0] w-[100%]"
            items={[...Array(6)].map(() => (
              <>
                <Stack className="lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] h-[750px]">
                  <Image
                    src="img_image1.png"
                    className="absolute lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] h-[750px] inset-[0] object-cover w-[100%]"
                    alt="image1"
                  />
                  <Column className="absolute bg-black_900_68 inset-[0] items-start justify-end w-[100%]">
                    <Column className="items-start justify-start 3xl:mt-[106px] mt-[118px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] w-[42%]">
                      <Text className="font-medium font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`50% Off Limited Offer`}</Text>
                      <Text className="font-bold font-playfairdisplay lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] 3xl:text-fs115 text-fs128 lg:text-fs74 xl:text-fs85 2xl:text-fs96 text-left text-white_A700">
                        {
                          <>
                            {`Summer `}
                            <br />
                            {`Collection`}
                          </>
                        }
                      </Text>
                    </Column>
                    <Row className="bg-gray_800 items-center justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] w-[13%]">
                      <Text className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow_2.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="Arrow"
                      />
                    </Row>
                    <Column className="items-end lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] w-[100%]">
                      <Stack className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] overflow-auto w-[56%]">
                        <Stack className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] right-[0] w-[100%]">
                          <Stack className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]">
                            <Stack className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]">
                              <Stack className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]">
                                <Stack className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]">
                                  <Stack className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]">
                                    <div className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] shadow-bs w-[100%]"></div>
                                    <Column className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center left-[0] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                                      <Image
                                        src="img_sweater_1.svg"
                                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                        alt="Sweater"
                                      />
                                      <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Jacket`}</Text>
                                    </Column>
                                  </Stack>
                                  <Column className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center left-[14%] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                                    <Image
                                      src="img_tshirt_1.svg"
                                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                      alt="Tshirt"
                                    />
                                    <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Shirt`}</Text>
                                  </Column>
                                </Stack>
                                <Column className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center left-[29%] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                                  <Image
                                    src="img_pants_1.svg"
                                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                    alt="Pants"
                                  />
                                  <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Pants`}</Text>
                                </Column>
                              </Stack>
                              <Column className="absolute bg-gray_800 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-x-[43%] inset-y-[0] items-center justify-center xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                                <Image
                                  src="img_boot_1.svg"
                                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                  alt="Boot"
                                />
                                <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Shoes`}</Text>
                              </Column>
                            </Stack>
                            <Column className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center right-[29%] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                              <Image
                                src="img_dress_1.svg"
                                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                alt="Dress"
                              />
                              <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Dress`}</Text>
                            </Column>
                          </Stack>
                          <Column className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center right-[14%] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                            <Image
                              src="img_belt_1.svg"
                              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                              alt="Belt"
                            />
                            <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Accesories`}</Text>
                          </Column>
                        </Stack>
                        <Column className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center right-[0] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                          <Image
                            src="img_skirt.svg"
                            className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                            alt="Skirt"
                          />
                          <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Skirt`}</Text>
                        </Column>
                      </Stack>
                    </Column>
                  </Column>
                </Stack>
              </>
            ))}
          />
          <PagerIndicator
            className="absolute bottom-[4%] h-[12px] left-[8%] w-[auto]"
            count={6}
            activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700"
            sliderRef={sliderRef}
            selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
            unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
          />
        </Stack>
        <Image
          src="img_brands.svg"
          className="h-[100px] lg:h-[59px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] object-contain w-[56%]"
          alt="brands"
        />
        <Row className="items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]">
          <Column className="w-[49%]">
            <Stack className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]">
              <Image
                src="img_placeholder_23.png"
                className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                alt="placeholder"
              />
              <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[10%] my-[auto] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-white_A700 w-[28%]">
                <span className="text-white_A700 font-poppins">
                  <>
                    {`Casual`}
                    <br />
                    {``}
                  </>
                </span>
                <span className="text-white_A700 text-fs48 font-playfairdisplay font-bold lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43">
                  <>{`Collection`}</>
                </span>
              </Text>
            </Stack>
            <Stack className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Image
                src="img_placeholder_24.png"
                className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                alt="placeholder"
              />
              <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[11%] my-[auto] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[28%]">
                <span className="text-gray_800 font-poppins">
                  <>
                    {`Summer `}
                    <br />
                    {``}
                  </>
                </span>
                <span className="text-gray_800 text-fs48 font-playfairdisplay font-bold lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43">
                  <>{`Collection`}</>
                </span>
              </Text>
            </Stack>
          </Column>
          <Stack className="lg:h-[486px] xl:h-[556px] 2xl:h-[625px] 3xl:h-[750px] h-[832px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[49%]">
            <Image
              src="img_placeholder_25.png"
              className="absolute lg:h-[486px] xl:h-[556px] 2xl:h-[625px] 3xl:h-[750px] h-[832px] inset-[0] object-cover w-[100%]"
              alt="placeholder"
            />
            <Text className="absolute font-normal leading-lh left-[10%] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-white_A700 top-[37%] w-[28%]">
              <span className="text-white_A700 font-poppins">
                <>
                  {`Big Vibe `}
                  <br />
                  {``}
                </>
              </span>
              <span className="text-white_A700 text-fs48 font-playfairdisplay font-bold lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43">
                <>{`Collection`}</>
              </span>
            </Text>
          </Stack>
        </Row>
        <Column className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`Featured`}</Text>
            <Row className="items-center justify-between 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[7%]">
              <Text className="font-medium my-[1px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`View all`}</Text>
              <Image
                src="img_arrow_3.svg"
                className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] object-contain w-[29%]"
                alt="Arrow"
              />
            </Row>
          </Row>
          <Row className="items-center justify-between lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]">
            <Stack className="lg:h-[444px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] h-[761px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] w-[32%]">
              <Image
                src="img_placeholder_26.png"
                className="absolute lg:h-[444px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] h-[761px] inset-[0] object-cover w-[100%]"
                alt="placeholder"
              />
              <Text className="absolute font-normal inset-x-[0] leading-lh mx-[auto] not-italic text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 top-[7%] w-[61%]">
                <span className="text-gray_800 font-poppins">
                  <>
                    {`Discover Our `}
                    <br />
                    {``}
                  </>
                </span>
                <span className="text-gray_800 font-poppins font-bold">
                  <>{`Featured Product`}</>
                </span>
              </Text>
            </Stack>
            <List
              className="gap-[0] min-h-[auto] w-[66%]"
              orientation="vertical"
            >
              <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                <Column className="items-center w-[100%]">
                  <Image
                    src="img_rectangle39.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[66%]">
                    <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                      {
                        <>
                          {`Green `}
                          <br />
                          {`Warm Jacket`}
                        </>
                      }
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center w-[100%]">
                  <Image
                    src="img_rectangle39_1.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[66%]">
                    <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                      {
                        <>
                          {`Black`}
                          <br />
                          {`Warm Jacket`}
                        </>
                      }
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center w-[100%]">
                  <Image
                    src="img_rectangle39_2.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[66%]">
                    <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                      {
                        <>
                          {`Blue Grey `}
                          <br />
                          {`Warm Jacket`}
                        </>
                      }
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center w-[100%]">
                  <Image
                    src="img_rectangle39_3.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[58%]">
                    <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                      {
                        <>
                          {`Blue Denim `}
                          <br />
                          {`Jacket`}
                        </>
                      }
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                <Column className="items-center justify-start w-[23%]">
                  <Image
                    src="img_rectangle39_4.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[45%]">
                    <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                      {
                        <>
                          {`Casual `}
                          <br />
                          {`Pink Shirt`}
                        </>
                      }
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] w-[23%]">
                  <Image
                    src="img_rectangle39_5.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[59%]">
                    <Text className="font-medium mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800">{`Gray T-shirt`}</Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[23%]">
                  <Image
                    src="img_rectangle39_6.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[66%]">
                    <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                      {
                        <>
                          {`Purple `}
                          <br />
                          {`Warm Jacket`}
                        </>
                      }
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] w-[23%]">
                  <Image
                    src="img_rectangle39_7.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[57%]">
                    <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Red Flannel`}</Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
              </Row>
            </List>
          </Row>
        </Column>
        <Stack className="lg:h-[338px] xl:h-[387px] 2xl:h-[435px] 3xl:h-[522px] h-[579px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="absolute bg-gray_800 items-center justify-start top-[0] w-[100%]">
            <Text className="font-bold lg:mb-[183px] xl:mb-[209px] 2xl:mb-[235px] 3xl:mb-[282px] mb-[314px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-white_A700">{`Limited Offer`}</Text>
          </Column>
          <List
            className="absolute bottom-[0] lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 inset-x-[0] min-h-[auto] mx-[auto] w-[85%]"
            orientation="horizontal"
          >
            <Row className="bg-gray_50 items-center justify-start shadow-bs1 w-[100%]">
              <Column className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[35%]">
                <Image
                  src="img_rectangle45.png"
                  className="lg:h-[163px] xl:h-[187px] 2xl:h-[210px] 3xl:h-[252px] h-[279px] mx-[auto] object-cover lg:w-[162px] xl:w-[186px] 2xl:w-[209px] 3xl:w-[251px] w-[279px]"
                  alt="Rectangle45"
                />
                <Button className="bg-gray_800 font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[72%]">{`Add to Cart`}</Button>
              </Column>
              <Column className="items-start lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:my-[45px] xl:my-[52px] 2xl:my-[58px] 3xl:my-[70px] my-[78px] w-[48%]">
                <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Limited Deals`}</Text>
                <Column className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 items-center justify-between w-[100%]">
                    <Column className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Text className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`08`}</Text>
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Hours`}</Text>
                    </Column>
                    <Column className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Text className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`58`}</Text>
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Minutes`}</Text>
                    </Column>
                    <Column className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Text className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`18`}</Text>
                      <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] 2xl:mr-[10px] 3xl:mr-[12px] mr-[14px] xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Seconds`}</Text>
                    </Column>
                  </Row>
                </Column>
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Black Warm Jacket`}</Text>
                <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Row className="items-center justify-start w-[100%]">
                    <Text className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                    <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`$199`}</Text>
                  </Row>
                </Column>
              </Column>
            </Row>
            <Row className="bg-gray_50 items-center justify-center shadow-bs1 w-[100%]">
              <Column className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[35%]">
                <Image
                  src="img_rectangle45_1.png"
                  className="lg:h-[163px] xl:h-[187px] 2xl:h-[210px] 3xl:h-[252px] h-[279px] mx-[auto] object-cover lg:w-[162px] xl:w-[186px] 2xl:w-[209px] 3xl:w-[251px] w-[279px]"
                  alt="Rectangle45"
                />
                <Button className="bg-gray_800 font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[72%]">{`Add to Cart`}</Button>
              </Column>
              <Column className="items-start lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:mr-[32px] xl:mr-[37px] 2xl:mr-[42px] 3xl:mr-[50px] mr-[56px] lg:my-[45px] xl:my-[52px] 2xl:my-[58px] 3xl:my-[70px] my-[78px] w-[48%]">
                <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Limited Deals`}</Text>
                <Column className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 items-center justify-between w-[100%]">
                    <Column className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Text className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`08`}</Text>
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Hours`}</Text>
                    </Column>
                    <Column className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Text className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`58`}</Text>
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Minutes`}</Text>
                    </Column>
                    <Column className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Text className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`18`}</Text>
                      <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] 2xl:mr-[10px] 3xl:mr-[12px] mr-[14px] xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Seconds`}</Text>
                    </Column>
                  </Row>
                </Column>
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Casual Grey Shoes`}</Text>
                <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Row className="items-center justify-start w-[100%]">
                    <Text className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$399`}</Text>
                    <Text className="font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`$199`}</Text>
                  </Row>
                </Column>
              </Column>
            </Row>
          </List>
        </Stack>
        <Row className="lg:gap-[17px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] gap-[30px] grid grid-cols-2 items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]">
          <Column className="items-start w-[100%]">
            <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`New Arrival`}</Text>
            <Column className="items-center lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78.5px] w-[100%]">
              <List
                className="gap-[0] min-h-[auto] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[97%]"
                orientation="vertical"
              >
                <Row className="items-center justify-start lg:my-[36px] xl:my-[41px] 2xl:my-[46px] 3xl:my-[56px] my-[62.5px] w-[100%]">
                  <Image
                    src="img_placeholder_27.png"
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder"
                  />
                  <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] w-[28%]">
                    <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Checkered Jacket`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                  <Image
                    src="img_placeholder_28.png"
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:ml-[43px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[67px] ml-[75px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder"
                  />
                  <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] w-[30%]">
                    <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Blue Woman Denim`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Row>
                <Row className="items-center justify-start lg:mr-[37px] xl:mr-[42px] 2xl:mr-[48px] 3xl:mr-[57px] mr-[64px] lg:my-[36px] xl:my-[41px] 2xl:my-[46px] 3xl:my-[56px] my-[62.5px] w-[92%]">
                  <Image
                    src="img_placeholder_29.png"
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder"
                  />
                  <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] w-[24%]">
                    <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Orange Jeans`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                  <Image
                    src="img_placeholder_30.png"
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] 3xl:ml-[111px] ml-[124px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder"
                  />
                  <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] w-[24%]">
                    <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Classic Watch`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Row>
              </List>
              <Row className="items-center justify-center lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78.5px] mx-[auto] w-[14%]">
                <Text className="font-medium my-[1px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`View all`}</Text>
                <Image
                  src="img_arrow_4.svg"
                  className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] object-contain w-[29%]"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
          <Column className="items-start w-[100%]">
            <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`Popular This Week`}</Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76px] lg:mx-[14px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] mx-[24px] w-[85%]"
              orientation="vertical"
            >
              <Row className="items-center justify-start xl:mr-[4px] lg:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] mr-[7px] lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] my-[60px] w-[99%]">
                <Image
                  src="img_placeholder_31.png"
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  alt="placeholder"
                />
                <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[19%]">
                  <Column className="w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Blue Jeans`}</Text>
                      <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                    selectedStarCount={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                </Column>
                <Image
                  src="img_placeholder_32.png"
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] ml-[163px] lg:ml-[95px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  alt="placeholder"
                />
                <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[20%]">
                  <Column className="w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Wristwatch`}</Text>
                      <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                    selectedStarCount={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                </Column>
              </Row>
              <Row className="items-center justify-start lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] my-[60px] w-[100%]">
                <Image
                  src="img_placeholder_33.png"
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  alt="placeholder"
                />
                <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[26%]">
                  <Column className="w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Elegant Jacket`}</Text>
                      <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                    selectedStarCount={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                </Column>
                <Image
                  src="img_placeholder_34.png"
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] 3xl:ml-[104px] ml-[116px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  alt="placeholder"
                />
                <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[21%]">
                  <Column className="w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Gray Watch`}</Text>
                      <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left">{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                    selectedStarCount={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                </Column>
              </Row>
            </List>
            <Column className="items-center lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76px] w-[100%]">
              <Row className="items-center justify-center mx-[auto] w-[14%]">
                <Text className="font-medium my-[1px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`View all`}</Text>
                <Image
                  src="img_arrow_5.svg"
                  className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] object-contain w-[29%]"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
        </Row>
        <Row className="bg-gray_50 items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Image
            src="img_truck.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] 3xl:my-[76px] my-[84.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            alt="Truck"
          />
          <Column className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[11%]">
            <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Free Delivery`}</Text>
            <Text className="font-normal leading-lh lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">
              {
                <>
                  {`This free shipping`}
                  <br />
                  {`only for selected region`}
                </>
              }
            </Text>
          </Column>
          <Image
            src="img_card.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 3xl:ml-[112px] ml-[125px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] 3xl:my-[76px] my-[84.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            alt="Card"
          />
          <Column className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[11%]">
            <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Payment Method`}</Text>
            <Text className="font-normal leading-lh lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">
              {
                <>
                  {`This free shipping`}
                  <br />
                  {`only for selected region`}
                </>
              }
            </Text>
          </Column>
          <Image
            src="img_broken.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 3xl:ml-[112px] ml-[125px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] 3xl:my-[76px] my-[84.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            alt="Broken"
          />
          <Column className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[11%]">
            <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Warranty`}</Text>
            <Text className="font-normal leading-lh lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">
              {
                <>
                  {`This free shipping`}
                  <br />
                  {`only for selected region`}
                </>
              }
            </Text>
          </Column>
          <Image
            src="img_support.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 3xl:ml-[112px] ml-[125px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] 3xl:my-[76px] my-[84.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            alt="Support"
          />
          <Column className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[11%]">
            <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Customer Support`}</Text>
            <Text className="font-normal leading-lh lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">
              {
                <>
                  {`This free shipping`}
                  <br />
                  {`only for selected region`}
                </>
              }
            </Text>
          </Column>
        </Row>
        <footer className="w-[100%]">
          <Column className="bg-gray_800 items-center justify-end w-[100%]">
            <Row className="items-start justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[100%]">
              <Column className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[22%]">
                <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[27%]">
                  <Image
                    src="img_group19_2.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                    alt="Group19"
                  />
                  <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Elliye`}</Text>
                </Row>
                <Text className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[92%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}</Text>
                <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Image
                        src="img_call.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Call"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`+1234567890`}</Text>
                    </Row>
                    <Row className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Image
                        src="img_email.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Email"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`elliye@support.com`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Row className="items-start justify-center 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] w-[49%]">
                <Column className="items-start justify-start lg:mb-[32px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] mb-[56px] w-[26%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Product Links`}</Text>
                  <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[41%]">
                    <Text className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Categories`}</Text>
                    <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`New Arrival`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Features`}</Text>
                    <Text className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Collections`}</Text>
                  </Column>
                </Column>
                <Column className="items-start justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[26%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Company`}</Text>
                  <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[60%]">
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`About`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Blog`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Careers`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Services`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Privacy Policy`}</Text>
                    <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Terms of service`}</Text>
                  </Column>
                </Column>
                <Column className="items-start justify-start lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[63px] mb-[71px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[41%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Join our Newsletter`}</Text>
                  <Text className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                  <Column className="lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]">
                    <Row className="bg-gray_800 border border-solid border-white_A700 items-center justify-between w-[100%]">
                      <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic opacity-op5 text-bluegray_100 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 tracking-ls1">{`Enter your email`}</Text>
                      <Image
                        src="img_submit.svg"
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        alt="submit"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Row>
            <Text className="font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] mt-[96px] mx-[auto] not-italic text-bluegray_100 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepageV2Page;
