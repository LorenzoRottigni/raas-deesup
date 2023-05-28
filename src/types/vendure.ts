export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type ActiveOrderResult = NoActiveOrderError | Order;

export type AddPaymentToOrderResult = IneligiblePaymentMethodError | NoActiveOrderError | Order | OrderPaymentStateError | OrderStateTransitionError | PaymentDeclinedError | PaymentFailedError;

export type Address = Node & {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country: Country;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<AddressCustomFields>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type AddressCustomFields = {
  __typename?: 'AddressCustomFields';
  addressName?: Maybe<Scalars['String']>;
  defaultPickupAddress?: Maybe<Scalars['Boolean']>;
  emailAddress?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String'];
  amount: Scalars['Int'];
  description: Scalars['String'];
  type: AdjustmentType;
};

export enum AdjustmentType {
  DistributedOrderPromotion = 'DISTRIBUTED_ORDER_PROMOTION',
  Other = 'OTHER',
  Promotion = 'PROMOTION'
}

/** Returned when attempting to set the Customer for an Order when already logged in. */
export type AlreadyLoggedInError = ErrorResult & {
  __typename?: 'AlreadyLoggedInError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type ApplyCouponCodeResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | Order;

export type Asset = Node & {
  __typename?: 'Asset';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<AssetCustomFields>;
  fileSize: Scalars['Int'];
  focalPoint?: Maybe<Coordinate>;
  height: Scalars['Int'];
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  preview: Scalars['String'];
  source: Scalars['String'];
  tags: Array<Tag>;
  type: AssetType;
  updatedAt: Scalars['DateTime'];
  width: Scalars['Int'];
};

export type AssetCustomFields = {
  __typename?: 'AssetCustomFields';
  assetType?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
};

export type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int'];
};

export enum AssetType {
  Binary = 'BINARY',
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type AuthenticationInput = {
  native?: InputMaybe<NativeAuthInput>;
  wordpress?: InputMaybe<NativeAuthInput>;
};

export type AuthenticationMethod = Node & {
  __typename?: 'AuthenticationMethod';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  strategy: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AuthenticationResult = CurrentUser | InvalidCredentialsError | NotVerifiedError;

export type BooleanCustomFieldConfig = CustomField & {
  __typename?: 'BooleanCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

/** Operators for filtering on a list of Boolean fields */
export type BooleanListOperators = {
  inList: Scalars['Boolean'];
};

/** Operators for filtering on a Boolean field */
export type BooleanOperators = {
  eq?: InputMaybe<Scalars['Boolean']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type BulkUpload = Node & {
  __typename?: 'BulkUpload';
  customer?: Maybe<Customer>;
  filename: Scalars['String'];
  id: Scalars['ID'];
  rowWithProduct?: Maybe<Scalars['Int']>;
};

export type Card = Node & {
  __typename?: 'Card';
  cardExpiredDate: Scalars['String'];
  cardHolderName: Scalars['String'];
  cardNumber: Scalars['String'];
  createdAt: Scalars['Float'];
  creator: User;
  id: Scalars['ID'];
  preferred: Scalars['Boolean'];
  updatedAt: Scalars['Float'];
  user: User;
};

export type CardFilterParameter = {
  cardExpiredDate?: InputMaybe<StringOperators>;
  cardHolderName?: InputMaybe<StringOperators>;
  cardNumber?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  preferred?: InputMaybe<BooleanOperators>;
  updatedAt?: InputMaybe<NumberOperators>;
};

export type CardList = PaginatedList & {
  __typename?: 'CardList';
  items: Array<Card>;
  totalItems: Scalars['Int'];
};

export type CardListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CardFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CardSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type CardSortParameter = {
  cardExpiredDate?: InputMaybe<SortOrder>;
  cardHolderName?: InputMaybe<SortOrder>;
  cardNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Channel = Node & {
  __typename?: 'Channel';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']>;
  defaultLanguageCode: LanguageCode;
  defaultShippingZone?: Maybe<Zone>;
  defaultTaxZone?: Maybe<Zone>;
  id: Scalars['ID'];
  pricesIncludeTax: Scalars['Boolean'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Collection = Node & {
  __typename?: 'Collection';
  assets: Array<Asset>;
  breadcrumbs: Array<CollectionBreadcrumb>;
  children?: Maybe<Array<Collection>>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CollectionCustomFields>;
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  filters: Array<ConfigurableOperation>;
  id: Scalars['ID'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String'];
  parent?: Maybe<Collection>;
  position: Scalars['Int'];
  productVariants: ProductVariantList;
  slug: Scalars['String'];
  translations: Array<CollectionTranslation>;
  updatedAt: Scalars['DateTime'];
};


export type CollectionProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CollectionCustomFields = {
  __typename?: 'CollectionCustomFields';
  SEODescription?: Maybe<Scalars['String']>;
  SEOName?: Maybe<Scalars['String']>;
  SEOTitle?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  generatedFromIds?: Maybe<Array<Scalars['Int']>>;
  isBulky?: Maybe<Scalars['Boolean']>;
  showMenu?: Maybe<Scalars['Boolean']>;
  showShop?: Maybe<Scalars['Boolean']>;
  showUploading?: Maybe<Scalars['Boolean']>;
};

export type CollectionFilterParameter = {
  SEODescription?: InputMaybe<StringOperators>;
  SEOName?: InputMaybe<StringOperators>;
  SEOTitle?: InputMaybe<StringOperators>;
  color?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  featured?: InputMaybe<BooleanOperators>;
  generatedFromIds?: InputMaybe<NumberListOperators>;
  id?: InputMaybe<IdOperators>;
  isBulky?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  position?: InputMaybe<NumberOperators>;
  showMenu?: InputMaybe<BooleanOperators>;
  showShop?: InputMaybe<BooleanOperators>;
  showUploading?: InputMaybe<BooleanOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CollectionList = PaginatedList & {
  __typename?: 'CollectionList';
  items: Array<Collection>;
  totalItems: Scalars['Int'];
};

export type CollectionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CollectionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CollectionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

/**
 * Which Collections are present in the products returned
 * by the search, and in what quantity.
 */
export type CollectionResult = {
  __typename?: 'CollectionResult';
  collection: Collection;
  count: Scalars['Int'];
};

export type CollectionSortParameter = {
  SEODescription?: InputMaybe<SortOrder>;
  SEOName?: InputMaybe<SortOrder>;
  SEOTitle?: InputMaybe<SortOrder>;
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  featured?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isBulky?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  showMenu?: InputMaybe<SortOrder>;
  showShop?: InputMaybe<SortOrder>;
  showUploading?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CollectionTranslationCustomFields>;
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CollectionTranslationCustomFields = {
  __typename?: 'CollectionTranslationCustomFields';
  SEODescription?: Maybe<Scalars['String']>;
  SEOName?: Maybe<Scalars['String']>;
  SEOTitle?: Maybe<Scalars['String']>;
};

export type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition';
  defaultValue?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  required: Scalars['Boolean'];
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type ConfigArgInput = {
  name: Scalars['String'];
  /** A JSON stringified representation of the actual value */
  value: Scalars['String'];
};

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  args: Array<ConfigArg>;
  code: Scalars['String'];
};

export type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition';
  args: Array<ConfigArgDefinition>;
  code: Scalars['String'];
  description: Scalars['String'];
};

export type ConfigurableOperationInput = {
  arguments: Array<ConfigArgInput>;
  code: Scalars['String'];
};

export type ContactUsInput = {
  email: Scalars['String'];
  subject: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type Country = Node & {
  __typename?: 'Country';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CountryCustomFields>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<CountryTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type CountryCustomFields = {
  __typename?: 'CountryCustomFields';
  enableCheckout?: Maybe<Scalars['Boolean']>;
  enableUploadingPage?: Maybe<Scalars['Boolean']>;
};

export type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int'];
};

export type CountryTranslation = {
  __typename?: 'CountryTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeExpiredError = ErrorResult & {
  __typename?: 'CouponCodeExpiredError';
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeInvalidError = ErrorResult & {
  __typename?: 'CouponCodeInvalidError';
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeLimitError = ErrorResult & {
  __typename?: 'CouponCodeLimitError';
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  limit: Scalars['Int'];
  message: Scalars['String'];
};

export type CreateAddressCustomFieldsInput = {
  addressName?: InputMaybe<Scalars['String']>;
  defaultPickupAddress?: InputMaybe<Scalars['Boolean']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type CreateAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryCode: Scalars['String'];
  customFields?: InputMaybe<CreateAddressCustomFieldsInput>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerCustomFieldsInput = {
  IBAN?: InputMaybe<Scalars['String']>;
  bankAccountHolder?: InputMaybe<Scalars['String']>;
  billingVat?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['DateTime']>;
  commercialRef?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  fiscalCode?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  ibanCountryId?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  lastLoginDate?: InputMaybe<Scalars['DateTime']>;
  newsletterActive?: InputMaybe<Scalars['Boolean']>;
  nickName?: InputMaybe<Scalars['String']>;
  onHolidays?: InputMaybe<Scalars['Boolean']>;
  priceMode?: InputMaybe<Scalars['String']>;
  registrationDate?: InputMaybe<Scalars['DateTime']>;
  registrationUtmCampaign?: InputMaybe<Scalars['String']>;
  registrationUtmMedium?: InputMaybe<Scalars['String']>;
  registrationUtmSource?: InputMaybe<Scalars['String']>;
  sellerCustomFee?: InputMaybe<Scalars['Int']>;
  sellerSubType?: InputMaybe<Scalars['String']>;
  sellerType?: InputMaybe<Scalars['String']>;
  shopName?: InputMaybe<Scalars['String']>;
  tradeProjectsPerYear?: InputMaybe<Scalars['String']>;
  tradeProjectsType?: InputMaybe<Scalars['String']>;
  tradeRole?: InputMaybe<Scalars['String']>;
  tradeStudioName?: InputMaybe<Scalars['String']>;
  tradeStudioWebsite?: InputMaybe<Scalars['String']>;
  userLogin?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerInput = {
  customFields?: InputMaybe<CreateCustomerCustomFieldsInput>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateProductCustomFieldsInput = {
  crossSellIds?: InputMaybe<Array<Scalars['ID']>>;
  customOrder?: InputMaybe<Scalars['Int']>;
  featuredProduct?: InputMaybe<Scalars['Boolean']>;
  sellerId?: InputMaybe<Scalars['ID']>;
  upSellIds?: InputMaybe<Array<Scalars['ID']>>;
  vendorId?: InputMaybe<Scalars['Int']>;
};

export type CreateProductInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<CreateProductCustomFieldsInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  translations: Array<ProductTranslationInput>;
};

/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byn = 'BYN',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** Swiss franc */
  Chf = 'CHF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Renminbi (Chinese) yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verde escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mru = 'MRU',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona/kronor */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Stn = 'STN',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikistani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan paʻanga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** United States dollar */
  Usd = 'USD',
  /** Uruguayan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Ves = 'VES',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** CFP franc (franc Pacifique) */
  Xpf = 'XPF',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmw = 'ZMW',
  /** Zimbabwean dollar */
  Zwl = 'ZWL'
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  channels: Array<CurrentUserChannel>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
};

export type CurrentUserChannel = {
  __typename?: 'CurrentUserChannel';
  code: Scalars['String'];
  id: Scalars['ID'];
  permissions: Array<Permission>;
  token: Scalars['String'];
};

export type CustomFacetCustomFieldsFilterParameters = {
  extra?: InputMaybe<StringOperators>;
};

export type CustomFacetFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  customFields?: InputMaybe<CustomFacetCustomFieldsFilterParameters>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CustomFacetOptions = {
  filter?: InputMaybe<CustomFacetFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SearchResultSortParameter>;
  take?: InputMaybe<Scalars['Int']>;
};

export type CustomField = {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type CustomFieldConfig = BooleanCustomFieldConfig | DateTimeCustomFieldConfig | FloatCustomFieldConfig | IntCustomFieldConfig | LocaleStringCustomFieldConfig | RelationCustomFieldConfig | StringCustomFieldConfig | TextCustomFieldConfig;

export type CustomMappings = CustomProductMappings | CustomProductVariantMappings;

export type CustomProductMappings = {
  __typename?: 'CustomProductMappings';
  featuredProduct?: Maybe<Scalars['Boolean']>;
};

export type CustomProductVariantMappings = {
  __typename?: 'CustomProductVariantMappings';
  brandCodes?: Maybe<Array<Scalars['String']>>;
  brandIds?: Maybe<Array<Scalars['ID']>>;
  colorIds?: Maybe<Array<Scalars['ID']>>;
  conditionIds?: Maybe<Array<Scalars['ID']>>;
  createDateTime?: Maybe<Scalars['Float']>;
  designerCodes?: Maybe<Array<Scalars['String']>>;
  designerIds?: Maybe<Array<Scalars['ID']>>;
  localPickupEnabled?: Maybe<Scalars['Boolean']>;
  materialIds?: Maybe<Array<Scalars['ID']>>;
  offerEnabled?: Maybe<Scalars['Boolean']>;
  onHold?: Maybe<Scalars['Boolean']>;
  productIdString?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Float']>;
  reducePriceDate?: Maybe<Scalars['Float']>;
  sellerType?: Maybe<Scalars['String']>;
  styleIds?: Maybe<Array<Scalars['ID']>>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  addresses?: Maybe<Array<Address>>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CustomerCustomFields>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  orders: OrderList;
  phoneNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};


export type CustomerOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};

export type CustomerCreateProductReturn = {
  __typename?: 'CustomerCreateProductReturn';
  productId: Scalars['ID'];
  productVariantId: Scalars['ID'];
};

export type CustomerCustomFields = {
  __typename?: 'CustomerCustomFields';
  IBAN?: Maybe<Scalars['String']>;
  bankAccountHolder?: Maybe<Scalars['String']>;
  billingVat?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['DateTime']>;
  commercialRef?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  fiscalCode?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  ibanCountry?: Maybe<Country>;
  language?: Maybe<Scalars['String']>;
  lastHubspotSyncDate?: Maybe<Scalars['DateTime']>;
  lastLoginDate?: Maybe<Scalars['DateTime']>;
  lastWooSyncDate?: Maybe<Scalars['DateTime']>;
  newsletterActive?: Maybe<Scalars['Boolean']>;
  nickName?: Maybe<Scalars['String']>;
  onHolidays?: Maybe<Scalars['Boolean']>;
  priceMode?: Maybe<Scalars['String']>;
  registrationDate?: Maybe<Scalars['DateTime']>;
  registrationUtmCampaign?: Maybe<Scalars['String']>;
  registrationUtmMedium?: Maybe<Scalars['String']>;
  registrationUtmSource?: Maybe<Scalars['String']>;
  sellerCustomFee?: Maybe<Scalars['Int']>;
  sellerSubType?: Maybe<Scalars['String']>;
  sellerType?: Maybe<Scalars['String']>;
  shopName?: Maybe<Scalars['String']>;
  sourceRegistration?: Maybe<Scalars['String']>;
  syncHubspotDone?: Maybe<Scalars['Boolean']>;
  syncHubspotTries?: Maybe<Scalars['Int']>;
  tradeProjectsPerYear?: Maybe<Scalars['String']>;
  tradeProjectsType?: Maybe<Scalars['String']>;
  tradeRole?: Maybe<Scalars['String']>;
  tradeStudioName?: Maybe<Scalars['String']>;
  tradeStudioWebsite?: Maybe<Scalars['String']>;
  userLogin?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  woocommerceUserId?: Maybe<Scalars['Int']>;
};

export type CustomerFeeProductReturn = {
  __typename?: 'CustomerFeeProductReturn';
  counterProducts?: Maybe<Scalars['Int']>;
  fee: Scalars['Int'];
  isProductFee?: Maybe<Scalars['Boolean']>;
  sellerType?: Maybe<Scalars['String']>;
};

export type CustomerFilterParameter = {
  IBAN?: InputMaybe<StringOperators>;
  bankAccountHolder?: InputMaybe<StringOperators>;
  billingVat?: InputMaybe<StringOperators>;
  birthdate?: InputMaybe<DateOperators>;
  commercialRef?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  displayName?: InputMaybe<StringOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  fiscalCode?: InputMaybe<StringOperators>;
  gender?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  language?: InputMaybe<StringOperators>;
  lastHubspotSyncDate?: InputMaybe<DateOperators>;
  lastLoginDate?: InputMaybe<DateOperators>;
  lastName?: InputMaybe<StringOperators>;
  lastWooSyncDate?: InputMaybe<DateOperators>;
  newsletterActive?: InputMaybe<BooleanOperators>;
  nickName?: InputMaybe<StringOperators>;
  onHolidays?: InputMaybe<BooleanOperators>;
  phoneNumber?: InputMaybe<StringOperators>;
  priceMode?: InputMaybe<StringOperators>;
  registrationDate?: InputMaybe<DateOperators>;
  registrationUtmCampaign?: InputMaybe<StringOperators>;
  registrationUtmMedium?: InputMaybe<StringOperators>;
  registrationUtmSource?: InputMaybe<StringOperators>;
  sellerCustomFee?: InputMaybe<NumberOperators>;
  sellerSubType?: InputMaybe<StringOperators>;
  sellerType?: InputMaybe<StringOperators>;
  shopName?: InputMaybe<StringOperators>;
  sourceRegistration?: InputMaybe<StringOperators>;
  syncHubspotDone?: InputMaybe<BooleanOperators>;
  syncHubspotTries?: InputMaybe<NumberOperators>;
  title?: InputMaybe<StringOperators>;
  tradeProjectsPerYear?: InputMaybe<StringOperators>;
  tradeProjectsType?: InputMaybe<StringOperators>;
  tradeRole?: InputMaybe<StringOperators>;
  tradeStudioName?: InputMaybe<StringOperators>;
  tradeStudioWebsite?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  userLogin?: InputMaybe<StringOperators>;
  username?: InputMaybe<StringOperators>;
  website?: InputMaybe<StringOperators>;
  woocommerceUserId?: InputMaybe<NumberOperators>;
};

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  customers: CustomerList;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type CustomerGroupCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};

export type CustomerList = PaginatedList & {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int'];
};

export type CustomerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CustomerFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CustomerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type CustomerSortParameter = {
  IBAN?: InputMaybe<SortOrder>;
  bankAccountHolder?: InputMaybe<SortOrder>;
  billingVat?: InputMaybe<SortOrder>;
  birthdate?: InputMaybe<SortOrder>;
  commercialRef?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  fiscalCode?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  ibanCountry?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  lastHubspotSyncDate?: InputMaybe<SortOrder>;
  lastLoginDate?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  lastWooSyncDate?: InputMaybe<SortOrder>;
  newsletterActive?: InputMaybe<SortOrder>;
  nickName?: InputMaybe<SortOrder>;
  onHolidays?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  priceMode?: InputMaybe<SortOrder>;
  registrationDate?: InputMaybe<SortOrder>;
  registrationUtmCampaign?: InputMaybe<SortOrder>;
  registrationUtmMedium?: InputMaybe<SortOrder>;
  registrationUtmSource?: InputMaybe<SortOrder>;
  sellerCustomFee?: InputMaybe<SortOrder>;
  sellerSubType?: InputMaybe<SortOrder>;
  sellerType?: InputMaybe<SortOrder>;
  shopName?: InputMaybe<SortOrder>;
  sourceRegistration?: InputMaybe<SortOrder>;
  syncHubspotDone?: InputMaybe<SortOrder>;
  syncHubspotTries?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  tradeProjectsPerYear?: InputMaybe<SortOrder>;
  tradeProjectsType?: InputMaybe<SortOrder>;
  tradeRole?: InputMaybe<SortOrder>;
  tradeStudioName?: InputMaybe<SortOrder>;
  tradeStudioWebsite?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userLogin?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  woocommerceUserId?: InputMaybe<SortOrder>;
};

/** Operators for filtering on a list of Date fields */
export type DateListOperators = {
  inList: Scalars['DateTime'];
};

/** Operators for filtering on a DateTime field */
export type DateOperators = {
  after?: InputMaybe<Scalars['DateTime']>;
  before?: InputMaybe<Scalars['DateTime']>;
  between?: InputMaybe<DateRange>;
  eq?: InputMaybe<Scalars['DateTime']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type DateRange = {
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeCustomFieldConfig = CustomField & {
  __typename?: 'DateTimeCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  message?: Maybe<Scalars['String']>;
  result: DeletionResult;
};

export enum DeletionResult {
  /** The entity was successfully deleted */
  Deleted = 'DELETED',
  /** Deletion did not take place, reason given in message */
  NotDeleted = 'NOT_DELETED'
}

export type Discount = {
  __typename?: 'Discount';
  adjustmentSource: Scalars['String'];
  amount: Scalars['Int'];
  amountWithTax: Scalars['Int'];
  description: Scalars['String'];
  type: AdjustmentType;
};

/** Returned when attempting to create a Customer with an email address already registered to an existing User. */
export type EmailAddressConflictError = ErrorResult & {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export enum ErrorCode {
  AlreadyLoggedInError = 'ALREADY_LOGGED_IN_ERROR',
  CouponCodeExpiredError = 'COUPON_CODE_EXPIRED_ERROR',
  CouponCodeInvalidError = 'COUPON_CODE_INVALID_ERROR',
  CouponCodeLimitError = 'COUPON_CODE_LIMIT_ERROR',
  EmailAddressConflictError = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  IdentifierChangeTokenExpiredError = 'IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR',
  IdentifierChangeTokenInvalidError = 'IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR',
  IneligiblePaymentMethodError = 'INELIGIBLE_PAYMENT_METHOD_ERROR',
  IneligibleShippingMethodError = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
  InsufficientStockError = 'INSUFFICIENT_STOCK_ERROR',
  InvalidCredentialsError = 'INVALID_CREDENTIALS_ERROR',
  MissingPasswordError = 'MISSING_PASSWORD_ERROR',
  NativeAuthStrategyError = 'NATIVE_AUTH_STRATEGY_ERROR',
  NegativeQuantityError = 'NEGATIVE_QUANTITY_ERROR',
  NotVerifiedError = 'NOT_VERIFIED_ERROR',
  NoActiveOrderError = 'NO_ACTIVE_ORDER_ERROR',
  OrderLimitError = 'ORDER_LIMIT_ERROR',
  OrderModificationError = 'ORDER_MODIFICATION_ERROR',
  OrderPaymentStateError = 'ORDER_PAYMENT_STATE_ERROR',
  OrderStateTransitionError = 'ORDER_STATE_TRANSITION_ERROR',
  PasswordAlreadySetError = 'PASSWORD_ALREADY_SET_ERROR',
  PasswordResetTokenExpiredError = 'PASSWORD_RESET_TOKEN_EXPIRED_ERROR',
  PasswordResetTokenInvalidError = 'PASSWORD_RESET_TOKEN_INVALID_ERROR',
  PasswordValidationError = 'PASSWORD_VALIDATION_ERROR',
  PaymentDeclinedError = 'PAYMENT_DECLINED_ERROR',
  PaymentFailedError = 'PAYMENT_FAILED_ERROR',
  UnknownError = 'UNKNOWN_ERROR',
  VerificationTokenExpiredError = 'VERIFICATION_TOKEN_EXPIRED_ERROR',
  VerificationTokenInvalidError = 'VERIFICATION_TOKEN_INVALID_ERROR'
}

export type ErrorResult = {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Facet = Node & {
  __typename?: 'Facet';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<FacetTranslation>;
  updatedAt: Scalars['DateTime'];
  values: Array<FacetValue>;
};

export type FacetFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FacetList = PaginatedList & {
  __typename?: 'FacetList';
  items: Array<Facet>;
  totalItems: Scalars['Int'];
};

export type FacetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type FacetSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacetTranslation = {
  __typename?: 'FacetTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FacetValue = Node & {
  __typename?: 'FacetValue';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<FacetValueCustomFields>;
  facet: Facet;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<FacetValueTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type FacetValueCustomFields = {
  __typename?: 'FacetValueCustomFields';
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  extraLocale?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
};

/**
 * Used to construct boolean expressions for filtering search results
 * by FacetValue ID. Examples:
 *
 * * ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`
 * * ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`
 * * ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`
 */
export type FacetValueFilterInput = {
  and?: InputMaybe<Scalars['ID']>;
  or?: InputMaybe<Array<Scalars['ID']>>;
};

export type FacetValueFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  extra?: InputMaybe<StringOperators>;
  extraLocale?: InputMaybe<StringOperators>;
  featured?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FacetValueList = PaginatedList & {
  __typename?: 'FacetValueList';
  items: Array<FacetValue>;
  totalItems: Scalars['Int'];
};

export type FacetValueListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetValueFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetValueSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
  __typename?: 'FacetValueResult';
  count: Scalars['Int'];
  facetValue: FacetValue;
};

export type FacetValueSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extra?: InputMaybe<SortOrder>;
  extraLocale?: InputMaybe<SortOrder>;
  featured?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<FacetValueTranslationCustomFields>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FacetValueTranslationCustomFields = {
  __typename?: 'FacetValueTranslationCustomFields';
  description?: Maybe<Scalars['String']>;
  extraLocale?: Maybe<Scalars['String']>;
};

export type FloatCustomFieldConfig = CustomField & {
  __typename?: 'FloatCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Float']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  method: Scalars['String'];
  orderItems: Array<OrderItem>;
  state: Scalars['String'];
  summary: Array<FulfillmentLineSummary>;
  trackingCode?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type FulfillmentLineSummary = {
  __typename?: 'FulfillmentLineSummary';
  orderLine: OrderLine;
  quantity: Scalars['Int'];
};

export type GenericResponseBrand = {
  __typename?: 'GenericResponseBrand';
  data?: Maybe<Scalars['JSON']>;
  errorCode: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  success: Scalars['String'];
};

export enum GlobalFlag {
  False = 'FALSE',
  Inherit = 'INHERIT',
  True = 'TRUE'
}

export type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  createdAt: Scalars['DateTime'];
  data: Scalars['JSON'];
  id: Scalars['ID'];
  type: HistoryEntryType;
  updatedAt: Scalars['DateTime'];
};

export type HistoryEntryFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type HistoryEntryList = PaginatedList & {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int'];
};

export type HistoryEntryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HistoryEntryFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HistoryEntrySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type HistoryEntrySortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum HistoryEntryType {
  CustomerAddedToGroup = 'CUSTOMER_ADDED_TO_GROUP',
  CustomerAddressCreated = 'CUSTOMER_ADDRESS_CREATED',
  CustomerAddressDeleted = 'CUSTOMER_ADDRESS_DELETED',
  CustomerAddressUpdated = 'CUSTOMER_ADDRESS_UPDATED',
  CustomerDetailUpdated = 'CUSTOMER_DETAIL_UPDATED',
  CustomerEmailUpdateRequested = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CustomerEmailUpdateVerified = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CustomerNote = 'CUSTOMER_NOTE',
  CustomerPasswordResetRequested = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CustomerPasswordResetVerified = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CustomerPasswordUpdated = 'CUSTOMER_PASSWORD_UPDATED',
  CustomerRegistered = 'CUSTOMER_REGISTERED',
  CustomerRemovedFromGroup = 'CUSTOMER_REMOVED_FROM_GROUP',
  CustomerVerified = 'CUSTOMER_VERIFIED',
  OrderCancellation = 'ORDER_CANCELLATION',
  OrderCouponApplied = 'ORDER_COUPON_APPLIED',
  OrderCouponRemoved = 'ORDER_COUPON_REMOVED',
  OrderFulfillment = 'ORDER_FULFILLMENT',
  OrderFulfillmentTransition = 'ORDER_FULFILLMENT_TRANSITION',
  OrderModified = 'ORDER_MODIFIED',
  OrderNote = 'ORDER_NOTE',
  OrderPaymentTransition = 'ORDER_PAYMENT_TRANSITION',
  OrderRefundTransition = 'ORDER_REFUND_TRANSITION',
  OrderStateTransition = 'ORDER_STATE_TRANSITION'
}

export type HubspotCreateTicketResponse = {
  __typename?: 'HubspotCreateTicketResponse';
  errorCode?: Maybe<Scalars['Int']>;
  status: Scalars['Boolean'];
};

export type HubspotResponse = {
  __typename?: 'HubspotResponse';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

/** Operators for filtering on a list of ID fields */
export type IdListOperators = {
  inList: Scalars['ID'];
};

/** Operators for filtering on an ID field */
export type IdOperators = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  notEq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/**
 * Returned if the token used to change a Customer's email address is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type IdentifierChangeTokenExpiredError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Returned if the token used to change a Customer's email address is either
 * invalid or does not match any expected tokens.
 */
export type IdentifierChangeTokenInvalidError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to add a Payment using a PaymentMethod for which the Order is not eligible. */
export type IneligiblePaymentMethodError = ErrorResult & {
  __typename?: 'IneligiblePaymentMethodError';
  eligibilityCheckerMessage?: Maybe<Scalars['String']>;
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export type IneligibleShippingMethodError = ErrorResult & {
  __typename?: 'IneligibleShippingMethodError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to add more items to the Order than are available */
export type InsufficientStockError = ErrorResult & {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  order: Order;
  quantityAvailable: Scalars['Int'];
};

export type IntCustomFieldConfig = CustomField & {
  __typename?: 'IntCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

/** Returned if the user authentication credentials are not valid */
export type InvalidCredentialsError = ErrorResult & {
  __typename?: 'InvalidCredentialsError';
  authenticationError: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export enum LanguageCode {
  /** Afrikaans */
  Af = 'af',
  /** Akan */
  Ak = 'ak',
  /** Amharic */
  Am = 'am',
  /** Arabic */
  Ar = 'ar',
  /** Assamese */
  As = 'as',
  /** Azerbaijani */
  Az = 'az',
  /** Belarusian */
  Be = 'be',
  /** Bulgarian */
  Bg = 'bg',
  /** Bambara */
  Bm = 'bm',
  /** Bangla */
  Bn = 'bn',
  /** Tibetan */
  Bo = 'bo',
  /** Breton */
  Br = 'br',
  /** Bosnian */
  Bs = 'bs',
  /** Catalan */
  Ca = 'ca',
  /** Chechen */
  Ce = 'ce',
  /** Corsican */
  Co = 'co',
  /** Czech */
  Cs = 'cs',
  /** Church Slavic */
  Cu = 'cu',
  /** Welsh */
  Cy = 'cy',
  /** Danish */
  Da = 'da',
  /** German */
  De = 'de',
  /** Austrian German */
  DeAt = 'de_AT',
  /** Swiss High German */
  DeCh = 'de_CH',
  /** Dzongkha */
  Dz = 'dz',
  /** Ewe */
  Ee = 'ee',
  /** Greek */
  El = 'el',
  /** English */
  En = 'en',
  /** Australian English */
  EnAu = 'en_AU',
  /** Canadian English */
  EnCa = 'en_CA',
  /** British English */
  EnGb = 'en_GB',
  /** American English */
  EnUs = 'en_US',
  /** Esperanto */
  Eo = 'eo',
  /** Spanish */
  Es = 'es',
  /** European Spanish */
  EsEs = 'es_ES',
  /** Mexican Spanish */
  EsMx = 'es_MX',
  /** Estonian */
  Et = 'et',
  /** Basque */
  Eu = 'eu',
  /** Persian */
  Fa = 'fa',
  /** Dari */
  FaAf = 'fa_AF',
  /** Fulah */
  Ff = 'ff',
  /** Finnish */
  Fi = 'fi',
  /** Faroese */
  Fo = 'fo',
  /** French */
  Fr = 'fr',
  /** Canadian French */
  FrCa = 'fr_CA',
  /** Swiss French */
  FrCh = 'fr_CH',
  /** Western Frisian */
  Fy = 'fy',
  /** Irish */
  Ga = 'ga',
  /** Scottish Gaelic */
  Gd = 'gd',
  /** Galician */
  Gl = 'gl',
  /** Gujarati */
  Gu = 'gu',
  /** Manx */
  Gv = 'gv',
  /** Hausa */
  Ha = 'ha',
  /** Hebrew */
  He = 'he',
  /** Hindi */
  Hi = 'hi',
  /** Croatian */
  Hr = 'hr',
  /** Haitian Creole */
  Ht = 'ht',
  /** Hungarian */
  Hu = 'hu',
  /** Armenian */
  Hy = 'hy',
  /** Interlingua */
  Ia = 'ia',
  /** Indonesian */
  Id = 'id',
  /** Igbo */
  Ig = 'ig',
  /** Sichuan Yi */
  Ii = 'ii',
  /** Icelandic */
  Is = 'is',
  /** Italian */
  It = 'it',
  /** Japanese */
  Ja = 'ja',
  /** Javanese */
  Jv = 'jv',
  /** Georgian */
  Ka = 'ka',
  /** Kikuyu */
  Ki = 'ki',
  /** Kazakh */
  Kk = 'kk',
  /** Kalaallisut */
  Kl = 'kl',
  /** Khmer */
  Km = 'km',
  /** Kannada */
  Kn = 'kn',
  /** Korean */
  Ko = 'ko',
  /** Kashmiri */
  Ks = 'ks',
  /** Kurdish */
  Ku = 'ku',
  /** Cornish */
  Kw = 'kw',
  /** Kyrgyz */
  Ky = 'ky',
  /** Latin */
  La = 'la',
  /** Luxembourgish */
  Lb = 'lb',
  /** Ganda */
  Lg = 'lg',
  /** Lingala */
  Ln = 'ln',
  /** Lao */
  Lo = 'lo',
  /** Lithuanian */
  Lt = 'lt',
  /** Luba-Katanga */
  Lu = 'lu',
  /** Latvian */
  Lv = 'lv',
  /** Malagasy */
  Mg = 'mg',
  /** Maori */
  Mi = 'mi',
  /** Macedonian */
  Mk = 'mk',
  /** Malayalam */
  Ml = 'ml',
  /** Mongolian */
  Mn = 'mn',
  /** Marathi */
  Mr = 'mr',
  /** Malay */
  Ms = 'ms',
  /** Maltese */
  Mt = 'mt',
  /** Burmese */
  My = 'my',
  /** Norwegian Bokmål */
  Nb = 'nb',
  /** North Ndebele */
  Nd = 'nd',
  /** Nepali */
  Ne = 'ne',
  /** Dutch */
  Nl = 'nl',
  /** Flemish */
  NlBe = 'nl_BE',
  /** Norwegian Nynorsk */
  Nn = 'nn',
  /** Nyanja */
  Ny = 'ny',
  /** Oromo */
  Om = 'om',
  /** Odia */
  Or = 'or',
  /** Ossetic */
  Os = 'os',
  /** Punjabi */
  Pa = 'pa',
  /** Polish */
  Pl = 'pl',
  /** Pashto */
  Ps = 'ps',
  /** Portuguese */
  Pt = 'pt',
  /** Brazilian Portuguese */
  PtBr = 'pt_BR',
  /** European Portuguese */
  PtPt = 'pt_PT',
  /** Quechua */
  Qu = 'qu',
  /** Romansh */
  Rm = 'rm',
  /** Rundi */
  Rn = 'rn',
  /** Romanian */
  Ro = 'ro',
  /** Moldavian */
  RoMd = 'ro_MD',
  /** Russian */
  Ru = 'ru',
  /** Kinyarwanda */
  Rw = 'rw',
  /** Sanskrit */
  Sa = 'sa',
  /** Sindhi */
  Sd = 'sd',
  /** Northern Sami */
  Se = 'se',
  /** Sango */
  Sg = 'sg',
  /** Sinhala */
  Si = 'si',
  /** Slovak */
  Sk = 'sk',
  /** Slovenian */
  Sl = 'sl',
  /** Samoan */
  Sm = 'sm',
  /** Shona */
  Sn = 'sn',
  /** Somali */
  So = 'so',
  /** Albanian */
  Sq = 'sq',
  /** Serbian */
  Sr = 'sr',
  /** Southern Sotho */
  St = 'st',
  /** Sundanese */
  Su = 'su',
  /** Swedish */
  Sv = 'sv',
  /** Swahili */
  Sw = 'sw',
  /** Congo Swahili */
  SwCd = 'sw_CD',
  /** Tamil */
  Ta = 'ta',
  /** Telugu */
  Te = 'te',
  /** Tajik */
  Tg = 'tg',
  /** Thai */
  Th = 'th',
  /** Tigrinya */
  Ti = 'ti',
  /** Turkmen */
  Tk = 'tk',
  /** Tongan */
  To = 'to',
  /** Turkish */
  Tr = 'tr',
  /** Tatar */
  Tt = 'tt',
  /** Uyghur */
  Ug = 'ug',
  /** Ukrainian */
  Uk = 'uk',
  /** Urdu */
  Ur = 'ur',
  /** Uzbek */
  Uz = 'uz',
  /** Vietnamese */
  Vi = 'vi',
  /** Volapük */
  Vo = 'vo',
  /** Wolof */
  Wo = 'wo',
  /** Xhosa */
  Xh = 'xh',
  /** Yiddish */
  Yi = 'yi',
  /** Yoruba */
  Yo = 'yo',
  /** Chinese */
  Zh = 'zh',
  /** Simplified Chinese */
  ZhHans = 'zh_Hans',
  /** Traditional Chinese */
  ZhHant = 'zh_Hant',
  /** Zulu */
  Zu = 'zu'
}

export type LocaleStringCustomFieldConfig = CustomField & {
  __typename?: 'LocaleStringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  pattern?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  languageCode: LanguageCode;
  value: Scalars['String'];
};

export enum LogicalOperator {
  And = 'AND',
  Or = 'OR'
}

export type MailchimpResponse = {
  __typename?: 'MailchimpResponse';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type MetricResponse = {
  __typename?: 'MetricResponse';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

/** Returned when attempting to register or verify a customer account without a password, when one is required. */
export type MissingPasswordError = ErrorResult & {
  __typename?: 'MissingPasswordError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  abandonedCheckout: Scalars['Boolean'];
  /** accept the offer */
  acceptOffer: OfferResult;
  /** add customer to group */
  addCustomerToGroup?: Maybe<Scalars['Boolean']>;
  /** Adds an item to the order. If custom fields are defined on the OrderLine entity, a third argument 'customFields' will be available. */
  addItemToOrder: UpdateOrderItemsResult;
  addItemToOrderCustom: UpdateOrderItemsResult;
  addItemToWishlist: WhishlistNode;
  addOfferToOrderCustom: UpdateOrderItemsResult;
  /** Add a Payment to the Order */
  addPaymentToOrder: AddPaymentToOrderResult;
  addWishlist: Wishlist;
  /** Adjusts an OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available. */
  adjustOrderLine: UpdateOrderItemsResult;
  /** Applies the given coupon code to the active Order */
  applyCouponCode: ApplyCouponCodeResult;
  /** Authenticates the user using a named authentication strategy */
  authenticate: AuthenticationResult;
  /** buyer makes a counter offer for that product */
  buyerMakeCounterOffer: OfferResult;
  /** buyer cancel the offer */
  cancelOffer: OfferResult;
  /** contact us form for users */
  contactUs?: Maybe<Scalars['Boolean']>;
  createCard: Card;
  /** Create a new Customer Address */
  createCustomerAddress: Address;
  createStripePaymentIntent?: Maybe<Scalars['String']>;
  /** create a Product for current user */
  customerCreateProduct: CustomerCreateProductReturn;
  /** Delete a Product for current user */
  customerDeleteProduct: DeletionResponse;
  customerDeleteProductImage?: Maybe<Scalars['JSON']>;
  /** update a Product for current user */
  customerUpdateProduct: Product;
  /** update a ProductVariant for current user */
  customerUpdateProductVariant: Array<Maybe<ProductVariant>>;
  customerUploadProductImage?: Maybe<Asset>;
  deleteCard: Card;
  /** Delete an existing Address */
  deleteCustomerAddress: Success;
  deleteFacetValue: Scalars['JSON'];
  deleteItemFromWishlist: WhishlistNode;
  deleteWishlist: Wishlist;
  getBrandStory?: Maybe<GenericResponseBrand>;
  hubspotCreateTicket: HubspotCreateTicketResponse;
  incrementProfileCounter: Scalars['Int'];
  jobRemoveProductsNewInCollection: Scalars['Boolean'];
  /** Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})` */
  login: NativeAuthenticationResult;
  /** End the current authenticated session */
  logout: Success;
  /** customer makes an offer for a product */
  makeAnOfferToProduct: OfferResult;
  manageNewsletter: NewsletterResponse;
  moveItemBetweenWishlists: WishlistItem;
  /** send order note email from order backoffice */
  orderNoteEmail?: Maybe<Scalars['Boolean']>;
  /** Regenerate and send a verification token for a new Customer registration. Only applicable if `authOptions.requireVerification` is set to true. */
  refreshCustomerVerification: RefreshCustomerVerificationResult;
  /**
   * Register a Customer account with the given credentials. There are three possible registration flows:
   *
   * _If `authOptions.requireVerification` is set to `true`:_
   *
   * 1. **The Customer is registered _with_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
   *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _without_ a password. The Customer is then
   *    verified and authenticated in one step.
   * 2. **The Customer is registered _without_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
   *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _with_ the chosen password of the Customer. The Customer is then
   *    verified and authenticated in one step.
   *
   * _If `authOptions.requireVerification` is set to `false`:_
   *
   * 3. The Customer _must_ be registered _with_ a password. No further action is needed - the Customer is able to authenticate immediately.
   */
  registerCustomerAccount: RegisterCustomerAccountResult;
  /** reject the offer */
  rejectOffer: OfferResult;
  /** Remove all OrderLine from the Order */
  removeAllOrderLines: RemoveOrderItemsResult;
  /** Removes the given coupon code from the active Order */
  removeCouponCode?: Maybe<Order>;
  /** Remove an OrderLine from the Order */
  removeOrderLine: RemoveOrderItemsResult;
  removeOrderLineCustom?: Maybe<RemoveOrderItemsResult>;
  /** Requests a password reset email to be sent */
  requestPasswordReset?: Maybe<RequestPasswordResetResult>;
  /**
   * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
   * (as is the default), then the `identifierChangeToken` will be assigned to the current User and
   * a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
   * that verification token to the Customer, which is then used to verify the change of email address.
   */
  requestUpdateCustomerEmailAddress: RequestUpdateCustomerEmailAddressResult;
  /** Resets a Customer's password based on the provided token */
  resetPassword: ResetPasswordResult;
  /** seller makes a counter offer for that product */
  sellerMakeCounterOffer: OfferResult;
  /** Set the Customer for the Order. Required only if the Customer is not currently logged in */
  setCustomerForOrder: SetCustomerForOrderResult;
  /** Sets the billing address for this order */
  setOrderBillingAddress: ActiveOrderResult;
  /** Allows any custom fields to be set for the active order */
  setOrderCustomFields: ActiveOrderResult;
  /** Custom mutation for set the shipping method on a specific order line */
  setOrderLineShippingMethodCustom: SetOrderShippingMethodResult;
  /** Sets the shipping address for this order */
  setOrderShippingAddress: ActiveOrderResult;
  /** Sets the shipping address for this order */
  setOrderShippingAddressCustom: ActiveOrderResult;
  /** Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query */
  setOrderShippingMethod: SetOrderShippingMethodResult;
  setPreferredCard: Card;
  syncMailchimpWithInterest: MailchimpResponse;
  trackMetric: MetricResponse;
  /** Transitions an Order to a new state. Valid next states can be found by querying `nextOrderStates` */
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  updateCard: Card;
  updateContact: HubspotResponse;
  /** Update an existing Customer */
  updateCustomer: Customer;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /**
   * Confirm the update of the emailAddress with the provided token, which has been generated by the
   * `requestUpdateCustomerEmailAddress` mutation.
   */
  updateCustomerEmailAddress: UpdateCustomerEmailAddressResult;
  /** Update the password of the active Customer */
  updateCustomerPassword: UpdateCustomerPasswordResult;
  updateHubspotContact: HubspotResponse;
  updateProfileProperty: ProfileProperties;
  updateWishlist: Wishlist;
  uploadExcelAndCreateRecord: Scalars['String'];
  /**
   * Verify a Customer email address with the token sent to that address. Only applicable if `authOptions.requireVerification` is set to true.
   *
   * If the Customer was not registered with a password in the `registerCustomerAccount` mutation, the password _must_ be
   * provided here.
   */
  verifyCustomerAccount: VerifyCustomerAccountResult;
};


export type MutationAbandonedCheckoutArgs = {
  email: Scalars['String'];
  productVariantId: Scalars['ID'];
};


export type MutationAcceptOfferArgs = {
  offerId: Scalars['ID'];
};


export type MutationAddCustomerToGroupArgs = {
  customerGroupName: Scalars['String'];
};


export type MutationAddItemToOrderArgs = {
  customFields?: InputMaybe<OrderLineCustomFieldsInput>;
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type MutationAddItemToOrderCustomArgs = {
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
  shippingMethodId: Scalars['ID'];
};


export type MutationAddItemToWishlistArgs = {
  productVariantId: Scalars['ID'];
  wishlistId?: InputMaybe<Scalars['ID']>;
};


export type MutationAddOfferToOrderCustomArgs = {
  offerId: Scalars['ID'];
  offerUid: Scalars['String'];
  shippingMethodId: Scalars['ID'];
};


export type MutationAddPaymentToOrderArgs = {
  input: PaymentInput;
};


export type MutationAddWishlistArgs = {
  name: Scalars['String'];
  options?: InputMaybe<WishlistListOptions>;
};


export type MutationAdjustOrderLineArgs = {
  customFields?: InputMaybe<OrderLineCustomFieldsInput>;
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type MutationApplyCouponCodeArgs = {
  couponCode: Scalars['String'];
};


export type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: InputMaybe<Scalars['Boolean']>;
};


export type MutationBuyerMakeCounterOfferArgs = {
  offerId: Scalars['ID'];
  offeredPrice: Scalars['Float'];
  quantity: Scalars['Float'];
};


export type MutationCancelOfferArgs = {
  offerId: Scalars['ID'];
};


export type MutationContactUsArgs = {
  input: ContactUsInput;
};


export type MutationCreateCardArgs = {
  cardExpirationDate: Scalars['String'];
  cardHolderName: Scalars['String'];
  cardNumber: Scalars['String'];
};


export type MutationCreateCustomerAddressArgs = {
  input: CreateAddressInput;
};


export type MutationCustomerCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCustomerDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationCustomerDeleteProductImageArgs = {
  assetId: Scalars['ID'];
  productId: Scalars['ID'];
};


export type MutationCustomerUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationCustomerUpdateProductVariantArgs = {
  input: Array<UpdateProductVariantInput>;
  typeAction?: InputMaybe<Scalars['String']>;
};


export type MutationCustomerUploadProductImageArgs = {
  image: Scalars['Upload'];
  productId: Scalars['ID'];
  type: Scalars['String'];
};


export type MutationDeleteCardArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFacetValueArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemFromWishlistArgs = {
  productVariantId: Scalars['ID'];
  wishlistId?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteWishlistArgs = {
  options?: InputMaybe<WishlistListOptions>;
  wishlistId: Scalars['ID'];
};


export type MutationGetBrandStoryArgs = {
  brand: Scalars['String'];
  language: Scalars['String'];
};


export type MutationHubspotCreateTicketArgs = {
  content: Scalars['String'];
  email: Scalars['String'];
  intent?: InputMaybe<Scalars['String']>;
  subject: Scalars['String'];
};


export type MutationIncrementProfileCounterArgs = {
  customerId: Scalars['ID'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  rememberMe?: InputMaybe<Scalars['Boolean']>;
  username: Scalars['String'];
};


export type MutationMakeAnOfferToProductArgs = {
  offeredPrice: Scalars['Float'];
  productId: Scalars['ID'];
  quantity: Scalars['Float'];
  utmCampaign?: InputMaybe<Scalars['String']>;
  utmMedium?: InputMaybe<Scalars['String']>;
  utmSource?: InputMaybe<Scalars['String']>;
};


export type MutationManageNewsletterArgs = {
  email: Scalars['String'];
  enable: Scalars['Boolean'];
  interest?: InputMaybe<Scalars['String']>;
};


export type MutationMoveItemBetweenWishlistsArgs = {
  fromId: Scalars['ID'];
  productVariantId: Scalars['ID'];
  toId?: InputMaybe<Scalars['ID']>;
};


export type MutationOrderNoteEmailArgs = {
  email: Scalars['String'];
  isPublic: Scalars['Boolean'];
  orderId: Scalars['ID'];
  orderNote: Scalars['String'];
  orderNumber: Scalars['String'];
};


export type MutationRefreshCustomerVerificationArgs = {
  emailAddress: Scalars['String'];
};


export type MutationRegisterCustomerAccountArgs = {
  input: RegisterCustomerInput;
};


export type MutationRejectOfferArgs = {
  offerId: Scalars['ID'];
};


export type MutationRemoveCouponCodeArgs = {
  couponCode: Scalars['String'];
};


export type MutationRemoveOrderLineArgs = {
  orderLineId: Scalars['ID'];
};


export type MutationRemoveOrderLineCustomArgs = {
  orderLineId: Scalars['ID'];
};


export type MutationRequestPasswordResetArgs = {
  emailAddress: Scalars['String'];
};


export type MutationRequestUpdateCustomerEmailAddressArgs = {
  newEmailAddress: Scalars['String'];
  password: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSellerMakeCounterOfferArgs = {
  offerId: Scalars['ID'];
  offeredPrice: Scalars['Float'];
};


export type MutationSetCustomerForOrderArgs = {
  input: CreateCustomerInput;
};


export type MutationSetOrderBillingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};


export type MutationSetOrderLineShippingMethodCustomArgs = {
  orderId?: InputMaybe<Scalars['ID']>;
  orderLineId: Scalars['ID'];
  shippingMethodId: Scalars['ID'];
};


export type MutationSetOrderShippingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderShippingAddressCustomArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderShippingMethodArgs = {
  shippingMethodId: Scalars['ID'];
};


export type MutationSetPreferredCardArgs = {
  id: Scalars['ID'];
};


export type MutationSyncMailchimpWithInterestArgs = {
  email: Scalars['String'];
  properties: Array<PropertyMailchimp>;
};


export type MutationTrackMetricArgs = {
  eventCategory: Scalars['String'];
  eventLabel: Scalars['String'];
  eventValue: Scalars['String'];
  ipAddress?: InputMaybe<Scalars['String']>;
  relationId: Scalars['Int'];
  userAgent?: InputMaybe<Scalars['String']>;
};


export type MutationTransitionOrderToStateArgs = {
  state: Scalars['String'];
};


export type MutationUpdateCardArgs = {
  cardExpirationDate?: InputMaybe<Scalars['String']>;
  cardHolderName?: InputMaybe<Scalars['String']>;
  cardNumber?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationUpdateContactArgs = {
  email: Scalars['String'];
  properties: Array<PropertyHubstpot>;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationUpdateCustomerEmailAddressArgs = {
  token: Scalars['String'];
};


export type MutationUpdateCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationUpdateHubspotContactArgs = {
  email: Scalars['String'];
  properties: Array<PropertyHubstpot>;
};


export type MutationUpdateProfilePropertyArgs = {
  customerId: Scalars['ID'];
  email: Scalars['String'];
  input?: InputMaybe<Array<ProfilePropertyInput>>;
};


export type MutationUpdateWishlistArgs = {
  name: Scalars['String'];
  options?: InputMaybe<WishlistListOptions>;
  wishlistId: Scalars['ID'];
};


export type MutationUploadExcelAndCreateRecordArgs = {
  file: Scalars['Upload'];
};


export type MutationVerifyCustomerAccountArgs = {
  password?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

export type MyFirstOfferList = {
  __typename?: 'MyFirstOfferList';
  items: Array<Offer>;
  totalItems?: Maybe<Array<Maybe<MyFirstOfferListTotalItem>>>;
};

export type MyFirstOfferListTotalItem = {
  __typename?: 'MyFirstOfferListTotalItem';
  count?: Maybe<Scalars['Int']>;
  offerStatus?: Maybe<Scalars['Int']>;
};

export type MyFirstProductList = {
  __typename?: 'MyFirstProductList';
  items: Array<Product>;
  totalItems?: Maybe<Array<Maybe<MyFirstProductListTotalItem>>>;
};

export type MyFirstProductListTotalItem = {
  __typename?: 'MyFirstProductListTotalItem';
  count?: Maybe<Scalars['Int']>;
  multivendorStatus?: Maybe<Scalars['Int']>;
};

export type NativeAuthInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

/** Returned when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export type NativeAuthStrategyError = ErrorResult & {
  __typename?: 'NativeAuthStrategyError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type NativeAuthenticationResult = CurrentUser | InvalidCredentialsError | NativeAuthStrategyError | NotVerifiedError;

/** Returned when attempting to set a negative OrderLine quantity. */
export type NegativeQuantityError = ErrorResult & {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type NewsletterResponse = {
  __typename?: 'NewsletterResponse';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  userHadNewsletterActive?: Maybe<Scalars['Boolean']>;
  userRegistered?: Maybe<Scalars['Boolean']>;
};

/**
 * Returned when invoking a mutation which depends on there being an active Order on the
 * current session.
 */
export type NoActiveOrderError = ErrorResult & {
  __typename?: 'NoActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

/**
 * Returned if `authOptions.requireVerification` is set to `true` (which is the default)
 * and an unverified user attempts to authenticate.
 */
export type NotVerifiedError = ErrorResult & {
  __typename?: 'NotVerifiedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Operators for filtering on a list of Number fields */
export type NumberListOperators = {
  inList: Scalars['Float'];
};

/** Operators for filtering on a Int or Float field */
export type NumberOperators = {
  between?: InputMaybe<NumberRange>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
};

export type NumberRange = {
  end: Scalars['Float'];
  start: Scalars['Float'];
};

export type Offer = Node & {
  __typename?: 'Offer';
  beforeExpireStatus?: Maybe<Scalars['Int']>;
  buyer: Customer;
  createdAt: Scalars['Float'];
  expiresAt?: Maybe<Scalars['Float']>;
  forever?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isAutomaticAccepted: Scalars['Boolean'];
  isFavorite?: Maybe<Scalars['Boolean']>;
  note?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  price: Scalars['Float'];
  product: Product;
  quantity: Scalars['Int'];
  seller: Customer;
  showNoteToBuyer?: Maybe<Scalars['Boolean']>;
  statusCode: Scalars['Int'];
  uid?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Float'];
};

export type OfferChangeItem = {
  __typename?: 'OfferChangeItem';
  col?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['String']>;
  old?: Maybe<Scalars['String']>;
};

export type OfferFilterParameter = {
  beforeExpireStatus?: InputMaybe<NumberOperators>;
  createdAt?: InputMaybe<NumberOperators>;
  expiresAt?: InputMaybe<NumberOperators>;
  forever?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  isAutomaticAccepted?: InputMaybe<BooleanOperators>;
  isFavorite?: InputMaybe<BooleanOperators>;
  note?: InputMaybe<StringOperators>;
  price?: InputMaybe<NumberOperators>;
  quantity?: InputMaybe<NumberOperators>;
  showNoteToBuyer?: InputMaybe<BooleanOperators>;
  statusCode?: InputMaybe<NumberOperators>;
  uid?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<NumberOperators>;
};

export type OfferHistory = Node & {
  __typename?: 'OfferHistory';
  actuator?: Maybe<User>;
  changes?: Maybe<Array<Maybe<OfferChangeItem>>>;
  createdAt: Scalars['Float'];
  forever?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isFavorite?: Maybe<Scalars['Boolean']>;
  new?: Maybe<Scalars['Boolean']>;
  note?: Maybe<Scalars['String']>;
  nowPrice?: Maybe<Scalars['Float']>;
  nowQuantity?: Maybe<Scalars['Float']>;
  offer: Offer;
  oldForever?: Maybe<Scalars['Boolean']>;
  oldIsFavorite?: Maybe<Scalars['Boolean']>;
  oldNote?: Maybe<Scalars['String']>;
  oldPrice?: Maybe<Scalars['Float']>;
  oldQuantity?: Maybe<Scalars['Float']>;
  oldShowNoteToBuyer?: Maybe<Scalars['Boolean']>;
  oldStatusCode?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  showNoteToBuyer?: Maybe<Scalars['Boolean']>;
  statusCode?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['Float'];
};

export type OfferHistoryList = PaginatedList & {
  __typename?: 'OfferHistoryList';
  items: Array<OfferHistory>;
  totalItems: Scalars['Int'];
};

export type OfferList = PaginatedList & {
  __typename?: 'OfferList';
  items: Array<Offer>;
  totalItems: Scalars['Int'];
};

export type OfferListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<OfferFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<OfferSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type OfferResult = {
  __typename?: 'OfferResult';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  offer?: Maybe<Offer>;
  success: Scalars['Boolean'];
};

export type OfferSortParameter = {
  beforeExpireStatus?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  statusCode?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Order = Node & {
  __typename?: 'Order';
  /** An order is active as long as the payment process has not been completed */
  active: Scalars['Boolean'];
  billingAddress?: Maybe<OrderAddress>;
  /** A unique code for the Order */
  code: Scalars['String'];
  /** An array of all coupon codes applied to the Order */
  couponCodes: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<OrderCustomFields>;
  customer?: Maybe<Customer>;
  discounts: Array<Discount>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  history: HistoryEntryList;
  id: Scalars['ID'];
  lines: Array<OrderLine>;
  /**
   * The date & time that the Order was placed, i.e. the Customer
   * completed the checkout and the Order is no longer "active"
   */
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  payments?: Maybe<Array<Payment>>;
  /** Promotions applied to the order. Only gets populated after the payment process has completed. */
  promotions: Array<Promotion>;
  shipping: Scalars['Int'];
  shippingAddress?: Maybe<OrderAddress>;
  shippingLines: Array<ShippingLine>;
  shippingWithTax: Scalars['Int'];
  state: Scalars['String'];
  /**
   * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
   * discounts which have been prorated (proportionally distributed) amongst the OrderItems.
   * To get a total of all OrderLines which does not account for prorated discounts, use the
   * sum of `OrderLine.discountedLinePrice` values.
   */
  subTotal: Scalars['Int'];
  /** Same as subTotal, but inclusive of tax */
  subTotalWithTax: Scalars['Int'];
  /**
   * Surcharges are arbitrary modifications to the Order total which are neither
   * ProductVariants nor discounts resulting from applied Promotions. For example,
   * one-off discounts based on customer interaction, or surcharges based on payment
   * methods.
   */
  surcharges: Array<Surcharge>;
  /** A summary of the taxes being applied to this Order */
  taxSummary: Array<OrderTaxSummary>;
  /** Equal to subTotal plus shipping */
  total: Scalars['Int'];
  totalQuantity: Scalars['Int'];
  /** The final payable amount. Equal to subTotalWithTax plus shippingWithTax */
  totalWithTax: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};


export type OrderHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  customFields?: Maybe<AddressCustomFields>;
  fullName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
};

export type OrderCustomFields = {
  __typename?: 'OrderCustomFields';
  customerNote?: Maybe<Scalars['String']>;
  fixedPriceBool?: Maybe<Scalars['Boolean']>;
  internalNotes?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  newsletterEnable?: Maybe<Scalars['Boolean']>;
};

export type OrderFilterParameter = {
  active?: InputMaybe<BooleanOperators>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  customerNote?: InputMaybe<StringOperators>;
  fixedPriceBool?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  internalNotes?: InputMaybe<StringOperators>;
  language?: InputMaybe<StringOperators>;
  newsletterEnable?: InputMaybe<BooleanOperators>;
  orderPlacedAt?: InputMaybe<DateOperators>;
  shipping?: InputMaybe<NumberOperators>;
  shippingWithTax?: InputMaybe<NumberOperators>;
  state?: InputMaybe<StringOperators>;
  subTotal?: InputMaybe<NumberOperators>;
  subTotalWithTax?: InputMaybe<NumberOperators>;
  total?: InputMaybe<NumberOperators>;
  totalQuantity?: InputMaybe<NumberOperators>;
  totalWithTax?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type OrderItem = Node & {
  __typename?: 'OrderItem';
  adjustments: Array<Adjustment>;
  cancelled: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Int'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Int'];
  fulfillment?: Maybe<Fulfillment>;
  id: Scalars['ID'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Int'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Int'];
  refundId?: Maybe<Scalars['ID']>;
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float'];
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Int'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Int'];
  unitTax: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

/** Returned when the maximum order size limit has been reached. */
export type OrderLimitError = ErrorResult & {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  maxItems: Scalars['Int'];
  message: Scalars['String'];
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<OrderLineCustomFields>;
  /** The price of the line including discounts, excluding tax */
  discountedLinePrice: Scalars['Int'];
  /** The price of the line including discounts and tax */
  discountedLinePriceWithTax: Scalars['Int'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Int'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Int'];
  discounts: Array<Discount>;
  featuredAsset?: Maybe<Asset>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  id: Scalars['ID'];
  items: Array<OrderItem>;
  /** The total price of the line excluding tax and discounts. */
  linePrice: Scalars['Int'];
  /** The total price of the line including tax but excluding discounts. */
  linePriceWithTax: Scalars['Int'];
  /** The total tax on this line */
  lineTax: Scalars['Int'];
  order: Order;
  productVariant: ProductVariant;
  /**
   * The actual line price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderLine, and is used in tax
   * and refund calculations.
   */
  proratedLinePrice: Scalars['Int'];
  /** The proratedLinePrice including tax */
  proratedLinePriceWithTax: Scalars['Int'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Int'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Int'];
  quantity: Scalars['Int'];
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float'];
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Int'];
  /** Non-zero if the unitPrice has changed since it was initially added to Order */
  unitPriceChangeSinceAdded: Scalars['Int'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Int'];
  /** Non-zero if the unitPriceWithTax has changed since it was initially added to Order */
  unitPriceWithTaxChangeSinceAdded: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type OrderLineCustomFields = {
  __typename?: 'OrderLineCustomFields';
  courierName?: Maybe<Scalars['String']>;
  courierTracking?: Maybe<Scalars['String']>;
  extraServicePrice?: Maybe<Scalars['Int']>;
  offerId?: Maybe<Scalars['String']>;
  shippingLine?: Maybe<ShippingLine>;
};

export type OrderLineCustomFieldsInput = {
  courierName?: InputMaybe<Scalars['String']>;
  courierTracking?: InputMaybe<Scalars['String']>;
  extraServicePrice?: InputMaybe<Scalars['Int']>;
  offerId?: InputMaybe<Scalars['String']>;
  shippingLineId?: InputMaybe<Scalars['ID']>;
};

export type OrderList = PaginatedList & {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int'];
};

export type OrderListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<OrderFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<OrderSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export type OrderModificationError = ErrorResult & {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type OrderNotesList = PaginatedList & {
  __typename?: 'OrderNotesList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int'];
};

/** Returned when attempting to add a Payment to an Order that is not in the `ArrangingPayment` state. */
export type OrderPaymentStateError = ErrorResult & {
  __typename?: 'OrderPaymentStateError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type OrderSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customerNote?: InputMaybe<SortOrder>;
  fixedPriceBool?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  internalNotes?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  newsletterEnable?: InputMaybe<SortOrder>;
  orderPlacedAt?: InputMaybe<SortOrder>;
  shipping?: InputMaybe<SortOrder>;
  shippingWithTax?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  subTotal?: InputMaybe<SortOrder>;
  subTotalWithTax?: InputMaybe<SortOrder>;
  total?: InputMaybe<SortOrder>;
  totalQuantity?: InputMaybe<SortOrder>;
  totalWithTax?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Returned if there is an error in transitioning the Order state */
export type OrderStateTransitionError = ErrorResult & {
  __typename?: 'OrderStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String'];
  message: Scalars['String'];
  toState: Scalars['String'];
  transitionError: Scalars['String'];
};

/**
 * A summary of the taxes being applied to this order, grouped
 * by taxRate.
 */
export type OrderTaxSummary = {
  __typename?: 'OrderTaxSummary';
  /** A description of this tax */
  description: Scalars['String'];
  /** The total net price or OrderItems to which this taxRate applies */
  taxBase: Scalars['Int'];
  /** The taxRate as a percentage */
  taxRate: Scalars['Float'];
  /** The total tax being applied to the Order at this taxRate */
  taxTotal: Scalars['Int'];
};

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int'];
};

/** Returned when attempting to verify a customer account with a password, when a password has already been set. */
export type PasswordAlreadySetError = ErrorResult & {
  __typename?: 'PasswordAlreadySetError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Returned if the token used to reset a Customer's password is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type PasswordResetTokenExpiredError = ErrorResult & {
  __typename?: 'PasswordResetTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Returned if the token used to reset a Customer's password is either
 * invalid or does not match any expected tokens.
 */
export type PasswordResetTokenInvalidError = ErrorResult & {
  __typename?: 'PasswordResetTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to register or verify a customer account where the given password fails password validation. */
export type PasswordValidationError = ErrorResult & {
  __typename?: 'PasswordValidationError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  validationErrorMessage: Scalars['String'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  method: Scalars['String'];
  refunds: Array<Refund>;
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Returned when a Payment is declined by the payment provider. */
export type PaymentDeclinedError = ErrorResult & {
  __typename?: 'PaymentDeclinedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

/** Returned when a Payment fails due to an error. */
export type PaymentFailedError = ErrorResult & {
  __typename?: 'PaymentFailedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

/** Passed as input to the `addPaymentToOrder` mutation. */
export type PaymentInput = {
  /**
   * This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method
   * as the "metadata" argument. For example, it could contain an ID for the payment and other
   * data generated by the payment provider.
   */
  metadata: Scalars['JSON'];
  /** This field should correspond to the `code` property of a PaymentMethod. */
  method: Scalars['String'];
};

export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  checker?: Maybe<ConfigurableOperation>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<PaymentMethodCustomFields>;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  handler: ConfigurableOperation;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PaymentMethodCustomFields = {
  __typename?: 'PaymentMethodCustomFields';
  order?: Maybe<Scalars['Int']>;
};

export type PaymentMethodQuote = {
  __typename?: 'PaymentMethodQuote';
  code: Scalars['String'];
  customFields?: Maybe<PaymentMethodCustomFields>;
  description: Scalars['String'];
  eligibilityMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isEligible: Scalars['Boolean'];
  name: Scalars['String'];
};

/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * ## Understanding Permission.Owner
 *
 * `Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
 * be accessible to the "owner" of that resource.
 *
 * For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
 * based on the activeUserId of the current session. As a result, the resolver code looks like this:
 *
 * @example
 * ```TypeScript
 * \@Query()
 * \@Allow(Permission.Owner)
 * async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
 *   const userId = ctx.activeUserId;
 *   if (userId) {
 *     return this.customerService.findOneByUserId(ctx, userId);
 *   }
 * }
 * ```
 *
 * Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
 * nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
 * of the resource has access. If not, then it is the equivalent of using `Permission.Public`.
 *
 *
 * @docsCategory common
 */
export enum Permission {
  /** Authenticated means simply that the user is logged in */
  Authenticated = 'Authenticated',
  /** Grants permission to create Administrator */
  CreateAdministrator = 'CreateAdministrator',
  /** Grants permission to create Asset */
  CreateAsset = 'CreateAsset',
  /** Grants permission to create Products, Facets, Assets, Collections */
  CreateCatalog = 'CreateCatalog',
  /** Grants permission to create Channel */
  CreateChannel = 'CreateChannel',
  /** Grants permission to create Collection */
  CreateCollection = 'CreateCollection',
  /** Grants permission to create Country */
  CreateCountry = 'CreateCountry',
  /** Grants permission to create Customer */
  CreateCustomer = 'CreateCustomer',
  /** Grants permission to create CustomerGroup */
  CreateCustomerGroup = 'CreateCustomerGroup',
  /** Grants permission to create Facet */
  CreateFacet = 'CreateFacet',
  /** Grants permission to create Order */
  CreateOrder = 'CreateOrder',
  /** Grants permission to create PaymentMethod */
  CreatePaymentMethod = 'CreatePaymentMethod',
  /** Grants permission to create Product */
  CreateProduct = 'CreateProduct',
  /** Grants permission to create Promotion */
  CreatePromotion = 'CreatePromotion',
  /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  CreateSettings = 'CreateSettings',
  /** Grants permission to create ShippingMethod */
  CreateShippingMethod = 'CreateShippingMethod',
  /** Grants permission to create System */
  CreateSystem = 'CreateSystem',
  /** Grants permission to create Tag */
  CreateTag = 'CreateTag',
  /** Grants permission to create TaxCategory */
  CreateTaxCategory = 'CreateTaxCategory',
  /** Grants permission to create TaxRate */
  CreateTaxRate = 'CreateTaxRate',
  /** Grants permission to create Zone */
  CreateZone = 'CreateZone',
  /** Grants permission to delete Administrator */
  DeleteAdministrator = 'DeleteAdministrator',
  /** Grants permission to delete Asset */
  DeleteAsset = 'DeleteAsset',
  /** Grants permission to delete Products, Facets, Assets, Collections */
  DeleteCatalog = 'DeleteCatalog',
  /** Grants permission to delete Channel */
  DeleteChannel = 'DeleteChannel',
  /** Grants permission to delete Collection */
  DeleteCollection = 'DeleteCollection',
  /** Grants permission to delete Country */
  DeleteCountry = 'DeleteCountry',
  /** Grants permission to delete Customer */
  DeleteCustomer = 'DeleteCustomer',
  /** Grants permission to delete CustomerGroup */
  DeleteCustomerGroup = 'DeleteCustomerGroup',
  /** Grants permission to delete Facet */
  DeleteFacet = 'DeleteFacet',
  /** Grants permission to delete Order */
  DeleteOrder = 'DeleteOrder',
  /** Grants permission to delete PaymentMethod */
  DeletePaymentMethod = 'DeletePaymentMethod',
  /** Grants permission to delete Product */
  DeleteProduct = 'DeleteProduct',
  /** Grants permission to delete Promotion */
  DeletePromotion = 'DeletePromotion',
  /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  DeleteSettings = 'DeleteSettings',
  /** Grants permission to delete ShippingMethod */
  DeleteShippingMethod = 'DeleteShippingMethod',
  /** Grants permission to delete System */
  DeleteSystem = 'DeleteSystem',
  /** Grants permission to delete Tag */
  DeleteTag = 'DeleteTag',
  /** Grants permission to delete TaxCategory */
  DeleteTaxCategory = 'DeleteTaxCategory',
  /** Grants permission to delete TaxRate */
  DeleteTaxRate = 'DeleteTaxRate',
  /** Grants permission to delete Zone */
  DeleteZone = 'DeleteZone',
  /** Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /** Public means any unauthenticated user may perform the operation */
  Public = 'Public',
  /** Grants permission to read Administrator */
  ReadAdministrator = 'ReadAdministrator',
  /** Grants permission to read Asset */
  ReadAsset = 'ReadAsset',
  /** Grants permission to read Products, Facets, Assets, Collections */
  ReadCatalog = 'ReadCatalog',
  /** Grants permission to read Channel */
  ReadChannel = 'ReadChannel',
  /** Grants permission to read Collection */
  ReadCollection = 'ReadCollection',
  /** Grants permission to read Country */
  ReadCountry = 'ReadCountry',
  /** Grants permission to read Customer */
  ReadCustomer = 'ReadCustomer',
  /** Grants permission to read CustomerGroup */
  ReadCustomerGroup = 'ReadCustomerGroup',
  /** Grants permission to read Facet */
  ReadFacet = 'ReadFacet',
  /** Grants permission to read Order */
  ReadOrder = 'ReadOrder',
  /** Grants permission to read PaymentMethod */
  ReadPaymentMethod = 'ReadPaymentMethod',
  /** Grants permission to read Product */
  ReadProduct = 'ReadProduct',
  /** Grants permission to read Promotion */
  ReadPromotion = 'ReadPromotion',
  /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  ReadSettings = 'ReadSettings',
  /** Grants permission to read ShippingMethod */
  ReadShippingMethod = 'ReadShippingMethod',
  /** Grants permission to read System */
  ReadSystem = 'ReadSystem',
  /** Grants permission to read Tag */
  ReadTag = 'ReadTag',
  /** Grants permission to read TaxCategory */
  ReadTaxCategory = 'ReadTaxCategory',
  /** Grants permission to read TaxRate */
  ReadTaxRate = 'ReadTaxRate',
  /** Grants permission to read Zone */
  ReadZone = 'ReadZone',
  /** SuperAdmin has unrestricted access to all operations */
  SuperAdmin = 'SuperAdmin',
  /** Grants permission to update Administrator */
  UpdateAdministrator = 'UpdateAdministrator',
  /** Grants permission to update Asset */
  UpdateAsset = 'UpdateAsset',
  /** Grants permission to update Products, Facets, Assets, Collections */
  UpdateCatalog = 'UpdateCatalog',
  /** Grants permission to update Channel */
  UpdateChannel = 'UpdateChannel',
  /** Grants permission to update Collection */
  UpdateCollection = 'UpdateCollection',
  /** Grants permission to update Country */
  UpdateCountry = 'UpdateCountry',
  /** Grants permission to update Customer */
  UpdateCustomer = 'UpdateCustomer',
  /** Grants permission to update CustomerGroup */
  UpdateCustomerGroup = 'UpdateCustomerGroup',
  /** Grants permission to update Facet */
  UpdateFacet = 'UpdateFacet',
  /** Grants permission to update GlobalSettings */
  UpdateGlobalSettings = 'UpdateGlobalSettings',
  /** Grants permission to update Order */
  UpdateOrder = 'UpdateOrder',
  /** Grants permission to update PaymentMethod */
  UpdatePaymentMethod = 'UpdatePaymentMethod',
  /** Grants permission to update Product */
  UpdateProduct = 'UpdateProduct',
  /** Grants permission to update Promotion */
  UpdatePromotion = 'UpdatePromotion',
  /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  UpdateSettings = 'UpdateSettings',
  /** Grants permission to update ShippingMethod */
  UpdateShippingMethod = 'UpdateShippingMethod',
  /** Grants permission to update System */
  UpdateSystem = 'UpdateSystem',
  /** Grants permission to update Tag */
  UpdateTag = 'UpdateTag',
  /** Grants permission to update TaxCategory */
  UpdateTaxCategory = 'UpdateTaxCategory',
  /** Grants permission to update TaxRate */
  UpdateTaxRate = 'UpdateTaxRate',
  /** Grants permission to update Zone */
  UpdateZone = 'UpdateZone'
}

/** The price range where the result has more than one price */
export type PriceRange = {
  __typename?: 'PriceRange';
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type PriceRangeBucket = {
  __typename?: 'PriceRangeBucket';
  count: Scalars['Int'];
  to: Scalars['Int'];
};

export type PriceRangeInput = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type Product = Node & {
  __typename?: 'Product';
  assets: Array<Asset>;
  collections: Array<Collection>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<ProductCustomFields>;
  description: Scalars['String'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  myVariants: Array<ProductVariant>;
  name: Scalars['String'];
  optionGroups: Array<ProductOptionGroup>;
  slug: Scalars['String'];
  translations: Array<ProductTranslation>;
  updatedAt: Scalars['DateTime'];
  /** Returns a paginated, sortable, filterable list of ProductVariants */
  variantList: ProductVariantList;
  /** Returns all ProductVariants */
  variants: Array<ProductVariant>;
  viewsCount: Scalars['Int'];
  wishlistCount: Scalars['Int'];
};


export type ProductVariantListArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type ProductCustomFields = {
  __typename?: 'ProductCustomFields';
  crossSell?: Maybe<Array<Product>>;
  customOrder?: Maybe<Scalars['Int']>;
  featuredProduct?: Maybe<Scalars['Boolean']>;
  seller?: Maybe<Customer>;
  upSell?: Maybe<Array<Product>>;
  vendorId?: Maybe<Scalars['Int']>;
};

export type ProductFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  customOrder?: InputMaybe<NumberOperators>;
  description?: InputMaybe<StringOperators>;
  featuredProduct?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  vendorId?: InputMaybe<NumberOperators>;
  viewsCount?: InputMaybe<NumberOperators>;
  wishlistCount?: InputMaybe<NumberOperators>;
};

export type ProductList = PaginatedList & {
  __typename?: 'ProductList';
  items: Array<Product>;
  totalItems: Scalars['Int'];
};

export type ProductListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  group: ProductOptionGroup;
  groupId: Scalars['ID'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<ProductOptionTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  customOrder?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  featuredProduct?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  seller?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vendorId?: InputMaybe<SortOrder>;
  viewsCount?: InputMaybe<SortOrder>;
  wishlistCount?: InputMaybe<SortOrder>;
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  assets: Array<Asset>;
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<ProductVariantCustomFields>;
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  options: Array<ProductOption>;
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  product: Product;
  productId: Scalars['ID'];
  sku: Scalars['String'];
  stockLevel: Scalars['String'];
  taxCategory: TaxCategory;
  taxRateApplied: TaxRate;
  translations: Array<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ProductVariantCustomFields = {
  __typename?: 'ProductVariantCustomFields';
  SEODescription?: Maybe<Scalars['String']>;
  SEOTitle?: Maybe<Scalars['String']>;
  assignCustomer?: Maybe<Customer>;
  attributesText?: Maybe<Scalars['String']>;
  authorActionUser?: Maybe<Scalars['String']>;
  brand?: Maybe<Array<FacetValue>>;
  brandRaw?: Maybe<Scalars['String']>;
  color?: Maybe<Array<FacetValue>>;
  colorRaw?: Maybe<Scalars['String']>;
  condition?: Maybe<Array<FacetValue>>;
  conditionRaw?: Maybe<Scalars['String']>;
  customBrand?: Maybe<Scalars['String']>;
  customDesigner?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['String']>;
  designer?: Maybe<Array<FacetValue>>;
  designerRaw?: Maybe<Scalars['String']>;
  detailsRaw?: Maybe<Scalars['String']>;
  dimensionsRaw?: Maybe<Scalars['String']>;
  earning?: Maybe<Scalars['Int']>;
  hasNoBrand?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['String']>;
  heightSeat?: Maybe<Scalars['String']>;
  isLampIncluded?: Maybe<Scalars['Boolean']>;
  isOutProduction?: Maybe<Scalars['Boolean']>;
  itemsInStock?: Maybe<Scalars['Int']>;
  limitPrice?: Maybe<Scalars['Int']>;
  material?: Maybe<Array<FacetValue>>;
  materialRaw?: Maybe<Scalars['String']>;
  multivendorStatus?: Maybe<Scalars['String']>;
  multivendorStatusDate?: Maybe<Scalars['DateTime']>;
  offerAutoAcceptEnabled?: Maybe<Scalars['Boolean']>;
  offerAutoAcceptPercentage?: Maybe<Scalars['Int']>;
  offerAutoAcceptPrice?: Maybe<Scalars['Int']>;
  offerEnabled?: Maybe<Scalars['Boolean']>;
  onHold?: Maybe<Scalars['Boolean']>;
  percentageFee?: Maybe<Scalars['Int']>;
  primaryCategory?: Maybe<Collection>;
  primaryCategoryRaw?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['DateTime']>;
  reducePriceDate?: Maybe<Scalars['DateTime']>;
  regularPrice?: Maybe<Scalars['Int']>;
  reservePrice?: Maybe<Scalars['Int']>;
  retailPrice?: Maybe<Scalars['Int']>;
  selectedCategory?: Maybe<Collection>;
  seoKeyWords?: Maybe<Scalars['String']>;
  seoMetaDescription?: Maybe<Scalars['String']>;
  seoSlug?: Maybe<Scalars['String']>;
  shippingAddress?: Maybe<Scalars['String']>;
  shippingCity?: Maybe<Scalars['String']>;
  shippingClass?: Maybe<Scalars['String']>;
  shippingCountryCode?: Maybe<Scalars['String']>;
  shippingLocalPickupEnabled?: Maybe<Scalars['Boolean']>;
  shippingNotes?: Maybe<Scalars['String']>;
  shippingPriceInternational?: Maybe<Scalars['Int']>;
  shippingPriceLocal?: Maybe<Scalars['Int']>;
  soldIndividually?: Maybe<Scalars['Boolean']>;
  soldPrice?: Maybe<Scalars['Int']>;
  story?: Maybe<Scalars['String']>;
  style?: Maybe<Array<FacetValue>>;
  styleRaw?: Maybe<Scalars['String']>;
  submissionLanguage?: Maybe<Scalars['String']>;
  submissionQuantity?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['String']>;
  woocommerceProductId?: Maybe<Scalars['Int']>;
};

export type ProductVariantFilterParameter = {
  SEODescription?: InputMaybe<StringOperators>;
  SEOTitle?: InputMaybe<StringOperators>;
  attributesText?: InputMaybe<StringOperators>;
  authorActionUser?: InputMaybe<StringOperators>;
  brandRaw?: InputMaybe<StringOperators>;
  colorRaw?: InputMaybe<StringOperators>;
  conditionRaw?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  customBrand?: InputMaybe<StringOperators>;
  customDesigner?: InputMaybe<StringOperators>;
  depth?: InputMaybe<StringOperators>;
  designerRaw?: InputMaybe<StringOperators>;
  detailsRaw?: InputMaybe<StringOperators>;
  dimensionsRaw?: InputMaybe<StringOperators>;
  earning?: InputMaybe<NumberOperators>;
  hasNoBrand?: InputMaybe<BooleanOperators>;
  height?: InputMaybe<StringOperators>;
  heightSeat?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  isLampIncluded?: InputMaybe<BooleanOperators>;
  isOutProduction?: InputMaybe<BooleanOperators>;
  itemsInStock?: InputMaybe<NumberOperators>;
  languageCode?: InputMaybe<StringOperators>;
  limitPrice?: InputMaybe<NumberOperators>;
  materialRaw?: InputMaybe<StringOperators>;
  multivendorStatus?: InputMaybe<StringOperators>;
  multivendorStatusDate?: InputMaybe<DateOperators>;
  name?: InputMaybe<StringOperators>;
  offerAutoAcceptEnabled?: InputMaybe<BooleanOperators>;
  offerAutoAcceptPercentage?: InputMaybe<NumberOperators>;
  offerAutoAcceptPrice?: InputMaybe<NumberOperators>;
  offerEnabled?: InputMaybe<BooleanOperators>;
  onHold?: InputMaybe<BooleanOperators>;
  percentageFee?: InputMaybe<NumberOperators>;
  price?: InputMaybe<NumberOperators>;
  priceWithTax?: InputMaybe<NumberOperators>;
  primaryCategoryRaw?: InputMaybe<StringOperators>;
  productId?: InputMaybe<IdOperators>;
  publishDate?: InputMaybe<DateOperators>;
  reducePriceDate?: InputMaybe<DateOperators>;
  regularPrice?: InputMaybe<NumberOperators>;
  reservePrice?: InputMaybe<NumberOperators>;
  retailPrice?: InputMaybe<NumberOperators>;
  seoKeyWords?: InputMaybe<StringOperators>;
  seoMetaDescription?: InputMaybe<StringOperators>;
  seoSlug?: InputMaybe<StringOperators>;
  shippingAddress?: InputMaybe<StringOperators>;
  shippingCity?: InputMaybe<StringOperators>;
  shippingClass?: InputMaybe<StringOperators>;
  shippingCountryCode?: InputMaybe<StringOperators>;
  shippingLocalPickupEnabled?: InputMaybe<BooleanOperators>;
  shippingNotes?: InputMaybe<StringOperators>;
  shippingPriceInternational?: InputMaybe<NumberOperators>;
  shippingPriceLocal?: InputMaybe<NumberOperators>;
  sku?: InputMaybe<StringOperators>;
  soldIndividually?: InputMaybe<BooleanOperators>;
  soldPrice?: InputMaybe<NumberOperators>;
  stockLevel?: InputMaybe<StringOperators>;
  story?: InputMaybe<StringOperators>;
  styleRaw?: InputMaybe<StringOperators>;
  submissionLanguage?: InputMaybe<StringOperators>;
  submissionQuantity?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  weight?: InputMaybe<NumberOperators>;
  width?: InputMaybe<StringOperators>;
  woocommerceProductId?: InputMaybe<NumberOperators>;
};

export type ProductVariantList = PaginatedList & {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int'];
};

export type ProductVariantListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductVariantFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductVariantSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ProductVariantSortParameter = {
  SEODescription?: InputMaybe<SortOrder>;
  SEOTitle?: InputMaybe<SortOrder>;
  assignCustomer?: InputMaybe<SortOrder>;
  attributesText?: InputMaybe<SortOrder>;
  authorActionUser?: InputMaybe<SortOrder>;
  brandRaw?: InputMaybe<SortOrder>;
  colorRaw?: InputMaybe<SortOrder>;
  conditionRaw?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customBrand?: InputMaybe<SortOrder>;
  customDesigner?: InputMaybe<SortOrder>;
  depth?: InputMaybe<SortOrder>;
  designerRaw?: InputMaybe<SortOrder>;
  detailsRaw?: InputMaybe<SortOrder>;
  dimensionsRaw?: InputMaybe<SortOrder>;
  earning?: InputMaybe<SortOrder>;
  hasNoBrand?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  heightSeat?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isLampIncluded?: InputMaybe<SortOrder>;
  isOutProduction?: InputMaybe<SortOrder>;
  itemsInStock?: InputMaybe<SortOrder>;
  limitPrice?: InputMaybe<SortOrder>;
  materialRaw?: InputMaybe<SortOrder>;
  multivendorStatus?: InputMaybe<SortOrder>;
  multivendorStatusDate?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  offerAutoAcceptEnabled?: InputMaybe<SortOrder>;
  offerAutoAcceptPercentage?: InputMaybe<SortOrder>;
  offerAutoAcceptPrice?: InputMaybe<SortOrder>;
  offerEnabled?: InputMaybe<SortOrder>;
  onHold?: InputMaybe<SortOrder>;
  percentageFee?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  priceWithTax?: InputMaybe<SortOrder>;
  primaryCategory?: InputMaybe<SortOrder>;
  primaryCategoryRaw?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  publishDate?: InputMaybe<SortOrder>;
  reducePriceDate?: InputMaybe<SortOrder>;
  regularPrice?: InputMaybe<SortOrder>;
  reservePrice?: InputMaybe<SortOrder>;
  retailPrice?: InputMaybe<SortOrder>;
  selectedCategory?: InputMaybe<SortOrder>;
  seoKeyWords?: InputMaybe<SortOrder>;
  seoMetaDescription?: InputMaybe<SortOrder>;
  seoSlug?: InputMaybe<SortOrder>;
  shippingAddress?: InputMaybe<SortOrder>;
  shippingCity?: InputMaybe<SortOrder>;
  shippingClass?: InputMaybe<SortOrder>;
  shippingCountryCode?: InputMaybe<SortOrder>;
  shippingLocalPickupEnabled?: InputMaybe<SortOrder>;
  shippingNotes?: InputMaybe<SortOrder>;
  shippingPriceInternational?: InputMaybe<SortOrder>;
  shippingPriceLocal?: InputMaybe<SortOrder>;
  sku?: InputMaybe<SortOrder>;
  soldIndividually?: InputMaybe<SortOrder>;
  soldPrice?: InputMaybe<SortOrder>;
  stockLevel?: InputMaybe<SortOrder>;
  story?: InputMaybe<SortOrder>;
  styleRaw?: InputMaybe<SortOrder>;
  submissionLanguage?: InputMaybe<SortOrder>;
  submissionQuantity?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  woocommerceProductId?: InputMaybe<SortOrder>;
};

export type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<ProductVariantTranslationCustomFields>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductVariantTranslationCustomFields = {
  __typename?: 'ProductVariantTranslationCustomFields';
  SEODescription?: Maybe<Scalars['String']>;
  SEOTitle?: Maybe<Scalars['String']>;
  attributesText?: Maybe<Scalars['String']>;
  seoKeyWords?: Maybe<Scalars['String']>;
  seoMetaDescription?: Maybe<Scalars['String']>;
};

export type ProductVariantTranslationInput = {
  customFields?: InputMaybe<ProductVariantTranslationInputCustomFields>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductVariantTranslationInputCustomFields = {
  SEODescription?: InputMaybe<Scalars['String']>;
  SEOTitle?: InputMaybe<Scalars['String']>;
  attributesText?: InputMaybe<Scalars['String']>;
  seoKeyWords?: InputMaybe<Scalars['String']>;
  seoMetaDescription?: InputMaybe<Scalars['String']>;
};

export type ProfileProperties = {
  __typename?: 'ProfileProperties';
  counter?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Float']>;
  exists: Scalars['Boolean'];
  favoriteBrands?: Maybe<Array<Maybe<Scalars['String']>>>;
  favoriteCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  favoriteDesigners?: Maybe<Array<Maybe<Scalars['String']>>>;
  favoriteStyles?: Maybe<Array<Maybe<Scalars['String']>>>;
  sellQuestion?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Float']>;
};

export type ProfilePropertyInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Promotion = Node & {
  __typename?: 'Promotion';
  actions: Array<ConfigurableOperation>;
  conditions: Array<ConfigurableOperation>;
  couponCode?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  enabled: Scalars['Boolean'];
  endsAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  perCustomerUsageLimit?: Maybe<Scalars['Int']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int'];
};

export type PropertyHubstpot = {
  property: Scalars['String'];
  value: Scalars['String'];
};

export type PropertyMailchimp = {
  property: Scalars['String'];
  value: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** The active Channel */
  activeChannel: Channel;
  /** The active Customer */
  activeCustomer?: Maybe<Customer>;
  /**
   * The active Order. Will be `null` until an Order is created via `addItemToOrder`. Once an Order reaches the
   * state of `PaymentAuthorized` or `PaymentSettled`, then that Order is no longer considered "active" and this
   * query will once again return `null`.
   */
  activeOrder?: Maybe<Order>;
  /** An array of supported Countries */
  availableCountries: Array<Country>;
  checkFacetValueUsage: Scalars['JSON'];
  /** Returns a Collection either by its id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
  collection?: Maybe<Collection>;
  /** A list of Collections available to the shop */
  collections: CollectionList;
  countWishlistFor: WishlistCounter;
  counterProductsByStatus?: Maybe<Scalars['Int']>;
  /** get Countries available on uploading page */
  countryAvailableUploadingPage: Array<Country>;
  /** Returns a list of payment methods and their eligibility based on the current active Order */
  eligiblePaymentMethods: Array<PaymentMethodQuote>;
  /** Returns a list of eligible shipping methods based on the current active Order */
  eligibleShippingMethods: Array<ShippingMethodQuote>;
  /** Returns a Facet by its id */
  facet?: Maybe<Facet>;
  facetValues: FacetValueList;
  /** A list of Facets available to the shop */
  facets: FacetList;
  findCard: Card;
  getCustomerFee?: Maybe<CustomerFeeProductReturn>;
  getExcelsByActiveUser: Array<BulkUpload>;
  /** get an offer if you are seller or buyer of that offer */
  getOffer: OfferResult;
  getProfileProperty: ProfileProperties;
  /** get list of offers a customer received from other customers */
  getReceivedOffers: OfferList;
  /** get list of offers a customer send to other customers */
  getSentOffers: OfferList;
  getShippingMethodsWithPrice?: Maybe<Array<Maybe<ResponseShippingMethodsPrice>>>;
  /** we check is the customer have an ongoing offer on this product */
  hasOfferOnGoing: Scalars['Boolean'];
  /** Returns information about the current authenticated User */
  me?: Maybe<CurrentUser>;
  myCards: CardList;
  myFirstNOffers?: Maybe<MyFirstOfferList>;
  /** get First Products for current user ordered for createdat */
  myFirstNProducts?: Maybe<MyFirstProductList>;
  myPreferredCard: Card;
  /** get Product for current user */
  myProduct?: Maybe<Product>;
  /** get Products for current user */
  myProducts?: Maybe<ProductList>;
  myWishlist: WhishlistNode;
  myWishlists: Wishlists;
  /** Returns the possible next states that the activeOrder can transition to */
  nextOrderStates: Array<Scalars['String']>;
  /**
   * Returns an Order based on the id. Note that in the Shop API, only orders belonging to the
   * currently-authenticated User may be queried.
   */
  order?: Maybe<Order>;
  /**
   * Returns an Order based on the order `code`. For guest Orders (i.e. Orders placed by non-authenticated Customers)
   * this query will only return the Order within 2 hours of the Order being placed. This allows an Order confirmation
   * screen to be shown immediately after completion of a guest checkout, yet prevents security risks of allowing
   * general anonymous access to Order data.
   */
  orderByCode?: Maybe<Order>;
  /** Get a Product either by id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
  product?: Maybe<Product>;
  /** Get a list of Products */
  products: ProductList;
  /** Search Products based on the criteria set by the `SearchInput` */
  search: SearchResponse;
};


export type QueryCheckFacetValueUsageArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  options?: InputMaybe<CollectionListOptions>;
};


export type QueryCountWishlistForArgs = {
  productVariantId: Scalars['ID'];
};


export type QueryCounterProductsByStatusArgs = {
  status: Array<Scalars['String']>;
};


export type QueryFacetArgs = {
  id: Scalars['ID'];
};


export type QueryFacetValuesArgs = {
  facetCode?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<FacetValueListOptions>;
};


export type QueryFacetsArgs = {
  options?: InputMaybe<FacetListOptions>;
};


export type QueryFindCardArgs = {
  id: Scalars['ID'];
};


export type QueryGetCustomerFeeArgs = {
  productId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetOfferArgs = {
  offerId: Scalars['ID'];
};


export type QueryGetProfilePropertyArgs = {
  customerId: Scalars['ID'];
};


export type QueryGetReceivedOffersArgs = {
  options?: InputMaybe<OfferListOptions>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type QueryGetSentOffersArgs = {
  options?: InputMaybe<OfferListOptions>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type QueryGetShippingMethodsWithPriceArgs = {
  countryCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productVariantId: Scalars['ID'];
};


export type QueryHasOfferOnGoingArgs = {
  productId: Scalars['ID'];
};


export type QueryMyCardsArgs = {
  options?: InputMaybe<CardListOptions>;
};


export type QueryMyFirstNOffersArgs = {
  take: Scalars['Int'];
  type: Scalars['String'];
};


export type QueryMyFirstNProductsArgs = {
  take: Scalars['Int'];
};


export type QueryMyProductArgs = {
  id: Scalars['ID'];
};


export type QueryMyProductsArgs = {
  multivendorStatus: Array<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<ProductListOptions>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryMyWishlistArgs = {
  wishlistId?: InputMaybe<Scalars['ID']>;
};


export type QueryMyWishlistsArgs = {
  options?: InputMaybe<WishlistsListOptions>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderByCodeArgs = {
  code: Scalars['String'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  options?: InputMaybe<ProductListOptions>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};

export type RefreshCustomerVerificationResult = NativeAuthStrategyError | Success;

export type Refund = Node & {
  __typename?: 'Refund';
  adjustment: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  items: Scalars['Int'];
  metadata?: Maybe<Scalars['JSON']>;
  method?: Maybe<Scalars['String']>;
  orderItems: Array<OrderItem>;
  paymentId: Scalars['ID'];
  reason?: Maybe<Scalars['String']>;
  shipping: Scalars['Int'];
  state: Scalars['String'];
  total: Scalars['Int'];
  transactionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type RegisterCustomerAccountResult = MissingPasswordError | NativeAuthStrategyError | PasswordValidationError | Success;

export type RegisterCustomerCustomFieldsInput = {
  IBAN?: InputMaybe<Scalars['String']>;
  bankAccountHolder?: InputMaybe<Scalars['String']>;
  billingVat?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['DateTime']>;
  commercialRef?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  fiscalCode?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  ibanCountryId?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  lastLoginDate?: InputMaybe<Scalars['DateTime']>;
  newsletterActive?: InputMaybe<Scalars['Boolean']>;
  nickName?: InputMaybe<Scalars['String']>;
  onHolidays?: InputMaybe<Scalars['Boolean']>;
  priceMode?: InputMaybe<Scalars['String']>;
  registrationDate?: InputMaybe<Scalars['DateTime']>;
  registrationUtmCampaign?: InputMaybe<Scalars['String']>;
  registrationUtmMedium?: InputMaybe<Scalars['String']>;
  registrationUtmSource?: InputMaybe<Scalars['String']>;
  sellerCustomFee?: InputMaybe<Scalars['Int']>;
  sellerSubType?: InputMaybe<Scalars['String']>;
  sellerType?: InputMaybe<Scalars['String']>;
  shopName?: InputMaybe<Scalars['String']>;
  tradeProjectsPerYear?: InputMaybe<Scalars['String']>;
  tradeProjectsType?: InputMaybe<Scalars['String']>;
  tradeRole?: InputMaybe<Scalars['String']>;
  tradeStudioName?: InputMaybe<Scalars['String']>;
  tradeStudioWebsite?: InputMaybe<Scalars['String']>;
  userLogin?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type RegisterCustomerInput = {
  customFields?: InputMaybe<RegisterCustomerCustomFieldsInput>;
  emailAddress: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type RelationCustomFieldConfig = CustomField & {
  __typename?: 'RelationCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  entity: Scalars['String'];
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  scalarFields: Array<Scalars['String']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type RequestPasswordResetResult = NativeAuthStrategyError | Success;

export type RequestUpdateCustomerEmailAddressResult = EmailAddressConflictError | InvalidCredentialsError | NativeAuthStrategyError | Success;

export type ResetPasswordResult = CurrentUser | NativeAuthStrategyError | NotVerifiedError | PasswordResetTokenExpiredError | PasswordResetTokenInvalidError | PasswordValidationError;

export type ResponseShippingMethodsPrice = {
  __typename?: 'ResponseShippingMethodsPrice';
  code: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  shippingMethodId?: Maybe<Scalars['ID']>;
};

export type Role = Node & {
  __typename?: 'Role';
  channels: Array<Channel>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  permissions: Array<Permission>;
  updatedAt: Scalars['DateTime'];
};

export type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int'];
};

export type SearchInput = {
  brandIds?: InputMaybe<Array<Scalars['ID']>>;
  categoryIds?: InputMaybe<Array<Scalars['ID']>>;
  collectionId?: InputMaybe<Scalars['ID']>;
  collectionSlug?: InputMaybe<Scalars['String']>;
  colorIds?: InputMaybe<Array<Scalars['ID']>>;
  conditionIds?: InputMaybe<Array<Scalars['ID']>>;
  designerIds?: InputMaybe<Array<Scalars['ID']>>;
  facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  facetValueOperator?: InputMaybe<LogicalOperator>;
  featuredProduct?: InputMaybe<Scalars['Boolean']>;
  groupByProduct?: InputMaybe<Scalars['Boolean']>;
  inStock?: InputMaybe<Scalars['Boolean']>;
  localPickupEnabled?: InputMaybe<Scalars['Boolean']>;
  materialIds?: InputMaybe<Array<Scalars['ID']>>;
  offerEnabled?: InputMaybe<Scalars['Boolean']>;
  priceRange?: InputMaybe<PriceRangeInput>;
  priceRangeWithTax?: InputMaybe<PriceRangeInput>;
  sellerType?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SearchResultSortParameter>;
  styleIds?: InputMaybe<Array<Scalars['ID']>>;
  take?: InputMaybe<Scalars['Int']>;
  term?: InputMaybe<Scalars['String']>;
};

export type SearchReindexResponse = {
  __typename?: 'SearchReindexResponse';
  success: Scalars['Boolean'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  collections: Array<CollectionResult>;
  facetValues: Array<FacetValueResult>;
  items: Array<SearchResult>;
  prices: SearchResponsePriceData;
  totalItems: Scalars['Int'];
};

export type SearchResponsePriceData = {
  __typename?: 'SearchResponsePriceData';
  buckets: Array<PriceRangeBucket>;
  bucketsWithTax: Array<PriceRangeBucket>;
  range: PriceRange;
  rangeWithTax: PriceRange;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['ID']>;
  currencyCode: CurrencyCode;
  /** @deprecated Use customProductMappings or customProductVariantMappings */
  customMappings: CustomMappings;
  customProductMappings: CustomProductMappings;
  customProductVariantMappings: CustomProductVariantMappings;
  description: Scalars['String'];
  facetIds: Array<Scalars['ID']>;
  facetValueIds: Array<Scalars['ID']>;
  inStock?: Maybe<Scalars['Boolean']>;
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  productAsset?: Maybe<SearchResultAsset>;
  productId: Scalars['ID'];
  productName: Scalars['String'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  /** A relevance score for the result. Differs between database implementations */
  score: Scalars['Float'];
  sku: Scalars['String'];
  slug: Scalars['String'];
};

export type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  focalPoint?: Maybe<Coordinate>;
  id: Scalars['ID'];
  preview: Scalars['String'];
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
  inStock?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  publishDate?: InputMaybe<SortOrder>;
};

export type SetCustomerForOrderResult = AlreadyLoggedInError | EmailAddressConflictError | NoActiveOrderError | Order;

export type SetOrderShippingMethodResult = IneligibleShippingMethodError | NoActiveOrderError | Order | OrderModificationError;

export type ShippingLine = {
  __typename?: 'ShippingLine';
  discountedPrice: Scalars['Int'];
  discountedPriceWithTax: Scalars['Int'];
  discounts: Array<Discount>;
  id: Scalars['ID'];
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  shippingMethod: ShippingMethod;
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  calculator: ConfigurableOperation;
  checker: ConfigurableOperation;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  fulfillmentHandlerCode: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<ShippingMethodTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int'];
};

export type ShippingMethodQuote = {
  __typename?: 'ShippingMethodQuote';
  code: Scalars['String'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  /** Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult */
  metadata?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
};

export type ShippingMethodTranslation = {
  __typename?: 'ShippingMethodTranslation';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** The price value where the result has a single price */
export type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Int'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringCustomFieldConfig = CustomField & {
  __typename?: 'StringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<StringFieldOption>>;
  pattern?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type StringFieldOption = {
  __typename?: 'StringFieldOption';
  label?: Maybe<Array<LocalizedString>>;
  value: Scalars['String'];
};

/** Operators for filtering on a list of String fields */
export type StringListOperators = {
  inList: Scalars['String'];
};

/** Operators for filtering on a String field */
export type StringOperators = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  notContains?: InputMaybe<Scalars['String']>;
  notEq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  regex?: InputMaybe<Scalars['String']>;
};

/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export type Success = {
  __typename?: 'Success';
  success: Scalars['Boolean'];
};

export type Surcharge = Node & {
  __typename?: 'Surcharge';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  sku?: Maybe<Scalars['String']>;
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type Tag = Node & {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type TagList = PaginatedList & {
  __typename?: 'TagList';
  items: Array<Tag>;
  totalItems: Scalars['Int'];
};

export type TaxCategory = Node & {
  __typename?: 'TaxCategory';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TaxLine = {
  __typename?: 'TaxLine';
  description: Scalars['String'];
  taxRate: Scalars['Float'];
};

export type TaxRate = Node & {
  __typename?: 'TaxRate';
  category: TaxCategory;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  customerGroup?: Maybe<CustomerGroup>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Float'];
  zone: Zone;
};

export type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int'];
};

export type TextCustomFieldConfig = CustomField & {
  __typename?: 'TextCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type UpdateAddressCustomFieldsInput = {
  addressName?: InputMaybe<Scalars['String']>;
  defaultPickupAddress?: InputMaybe<Scalars['Boolean']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<UpdateAddressCustomFieldsInput>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  streetLine1?: InputMaybe<Scalars['String']>;
  streetLine2?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerCustomFieldsInput = {
  IBAN?: InputMaybe<Scalars['String']>;
  bankAccountHolder?: InputMaybe<Scalars['String']>;
  billingVat?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['DateTime']>;
  commercialRef?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  fiscalCode?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  ibanCountryId?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  lastLoginDate?: InputMaybe<Scalars['DateTime']>;
  newsletterActive?: InputMaybe<Scalars['Boolean']>;
  nickName?: InputMaybe<Scalars['String']>;
  onHolidays?: InputMaybe<Scalars['Boolean']>;
  priceMode?: InputMaybe<Scalars['String']>;
  registrationDate?: InputMaybe<Scalars['DateTime']>;
  registrationUtmCampaign?: InputMaybe<Scalars['String']>;
  registrationUtmMedium?: InputMaybe<Scalars['String']>;
  registrationUtmSource?: InputMaybe<Scalars['String']>;
  sellerCustomFee?: InputMaybe<Scalars['Int']>;
  sellerSubType?: InputMaybe<Scalars['String']>;
  sellerType?: InputMaybe<Scalars['String']>;
  shopName?: InputMaybe<Scalars['String']>;
  tradeProjectsPerYear?: InputMaybe<Scalars['String']>;
  tradeProjectsType?: InputMaybe<Scalars['String']>;
  tradeRole?: InputMaybe<Scalars['String']>;
  tradeStudioName?: InputMaybe<Scalars['String']>;
  tradeStudioWebsite?: InputMaybe<Scalars['String']>;
  userLogin?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerEmailAddressResult = IdentifierChangeTokenExpiredError | IdentifierChangeTokenInvalidError | NativeAuthStrategyError | Success;

export type UpdateCustomerInput = {
  customFields?: InputMaybe<UpdateCustomerCustomFieldsInput>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerPasswordResult = InvalidCredentialsError | NativeAuthStrategyError | PasswordValidationError | Success;

export type UpdateOrderCustomFieldsInput = {
  customerNote?: InputMaybe<Scalars['String']>;
  internalNotes?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderInput = {
  customFields?: InputMaybe<UpdateOrderCustomFieldsInput>;
};

export type UpdateOrderItemsResult = InsufficientStockError | NegativeQuantityError | Order | OrderLimitError | OrderModificationError;

export type UpdateProductCustomFieldsInput = {
  crossSellIds?: InputMaybe<Array<Scalars['ID']>>;
  customOrder?: InputMaybe<Scalars['Int']>;
  featuredProduct?: InputMaybe<Scalars['Boolean']>;
  sellerId?: InputMaybe<Scalars['ID']>;
  upSellIds?: InputMaybe<Array<Scalars['ID']>>;
  vendorId?: InputMaybe<Scalars['Int']>;
};

export type UpdateProductInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<UpdateProductCustomFieldsInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<ProductTranslationInput>>;
};

export type UpdateProductVariantCustomFieldsInput = {
  assignCustomerId?: InputMaybe<Scalars['ID']>;
  authorActionUser?: InputMaybe<Scalars['String']>;
  brandIds?: InputMaybe<Array<Scalars['ID']>>;
  brandRaw?: InputMaybe<Scalars['String']>;
  colorIds?: InputMaybe<Array<Scalars['ID']>>;
  colorRaw?: InputMaybe<Scalars['String']>;
  conditionIds?: InputMaybe<Array<Scalars['ID']>>;
  conditionRaw?: InputMaybe<Scalars['String']>;
  customBrand?: InputMaybe<Scalars['String']>;
  customDesigner?: InputMaybe<Scalars['String']>;
  depth?: InputMaybe<Scalars['String']>;
  designerIds?: InputMaybe<Array<Scalars['ID']>>;
  designerRaw?: InputMaybe<Scalars['String']>;
  detailsRaw?: InputMaybe<Scalars['String']>;
  dimensionsRaw?: InputMaybe<Scalars['String']>;
  earning?: InputMaybe<Scalars['Int']>;
  hasNoBrand?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['String']>;
  heightSeat?: InputMaybe<Scalars['String']>;
  isLampIncluded?: InputMaybe<Scalars['Boolean']>;
  isOutProduction?: InputMaybe<Scalars['Boolean']>;
  itemsInStock?: InputMaybe<Scalars['Int']>;
  limitPrice?: InputMaybe<Scalars['Int']>;
  materialIds?: InputMaybe<Array<Scalars['ID']>>;
  materialRaw?: InputMaybe<Scalars['String']>;
  multivendorStatus?: InputMaybe<Scalars['String']>;
  multivendorStatusDate?: InputMaybe<Scalars['DateTime']>;
  offerAutoAcceptEnabled?: InputMaybe<Scalars['Boolean']>;
  offerAutoAcceptPercentage?: InputMaybe<Scalars['Int']>;
  offerAutoAcceptPrice?: InputMaybe<Scalars['Int']>;
  offerEnabled?: InputMaybe<Scalars['Boolean']>;
  onHold?: InputMaybe<Scalars['Boolean']>;
  percentageFee?: InputMaybe<Scalars['Int']>;
  primaryCategoryId?: InputMaybe<Scalars['ID']>;
  primaryCategoryRaw?: InputMaybe<Scalars['String']>;
  publishDate?: InputMaybe<Scalars['DateTime']>;
  reducePriceDate?: InputMaybe<Scalars['DateTime']>;
  regularPrice?: InputMaybe<Scalars['Int']>;
  reservePrice?: InputMaybe<Scalars['Int']>;
  retailPrice?: InputMaybe<Scalars['Int']>;
  selectedCategoryId?: InputMaybe<Scalars['ID']>;
  seoSlug?: InputMaybe<Scalars['String']>;
  shippingAddress?: InputMaybe<Scalars['String']>;
  shippingCity?: InputMaybe<Scalars['String']>;
  shippingClass?: InputMaybe<Scalars['String']>;
  shippingCountryCode?: InputMaybe<Scalars['String']>;
  shippingLocalPickupEnabled?: InputMaybe<Scalars['Boolean']>;
  shippingNotes?: InputMaybe<Scalars['String']>;
  shippingPriceInternational?: InputMaybe<Scalars['Int']>;
  shippingPriceLocal?: InputMaybe<Scalars['Int']>;
  soldIndividually?: InputMaybe<Scalars['Boolean']>;
  soldPrice?: InputMaybe<Scalars['Int']>;
  story?: InputMaybe<Scalars['String']>;
  styleIds?: InputMaybe<Array<Scalars['ID']>>;
  styleRaw?: InputMaybe<Scalars['String']>;
  submissionLanguage?: InputMaybe<Scalars['String']>;
  submissionQuantity?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['String']>;
  woocommerceProductId?: InputMaybe<Scalars['Int']>;
};

export type UpdateProductVariantInput = {
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  customFields?: InputMaybe<UpdateProductVariantCustomFieldsInput>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  optionIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  outOfStockThreshold?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
  stockOnHand?: InputMaybe<Scalars['Int']>;
  taxCategoryId?: InputMaybe<Scalars['ID']>;
  trackInventory?: InputMaybe<Scalars['Boolean']>;
  translations: Array<ProductVariantTranslationInput>;
  useGlobalOutOfStockThreshold?: InputMaybe<Scalars['Boolean']>;
};

export type User = Node & {
  __typename?: 'User';
  authenticationMethods: Array<AuthenticationMethod>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<UserCustomFields>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  roles: Array<Role>;
  updatedAt: Scalars['DateTime'];
  verified: Scalars['Boolean'];
};

export type UserCustomFields = {
  __typename?: 'UserCustomFields';
  oldPasswordMD5?: Maybe<Scalars['String']>;
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type VerificationTokenExpiredError = ErrorResult & {
  __typename?: 'VerificationTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is either
 * invalid or does not match any expected tokens.
 */
export type VerificationTokenInvalidError = ErrorResult & {
  __typename?: 'VerificationTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type VerifyCustomerAccountResult = CurrentUser | MissingPasswordError | NativeAuthStrategyError | PasswordAlreadySetError | PasswordValidationError | VerificationTokenExpiredError | VerificationTokenInvalidError;

export type WhishlistNode = Node & {
  __typename?: 'WhishlistNode';
  default: Scalars['Boolean'];
  id: Scalars['ID'];
  items: Array<WishlistItem>;
  name: Scalars['String'];
  user: User;
};

export type Wishlist = PaginatedList & {
  __typename?: 'Wishlist';
  default: Scalars['Boolean'];
  id: Scalars['ID'];
  items: Array<WishlistItem>;
  name: Scalars['String'];
  totalItems: Scalars['Int'];
  user: User;
};

export type WishlistCounter = {
  __typename?: 'WishlistCounter';
  counter: Scalars['Int'];
  haveCurrent?: Maybe<Scalars['Boolean']>;
};

export type WishlistFilterParameter = {
  default?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  totalItems?: InputMaybe<NumberOperators>;
};

export type WishlistItem = Node & {
  __typename?: 'WishlistItem';
  Wishlist?: Maybe<Wishlist>;
  id: Scalars['ID'];
  productVariant?: Maybe<ProductVariant>;
};


export type WishlistItemWishlistArgs = {
  options?: InputMaybe<WishlistListOptions>;
};

export type WishlistListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<WishlistFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<WishlistSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type WishlistSortParameter = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  totalItems?: InputMaybe<SortOrder>;
};

export type Wishlists = PaginatedList & {
  __typename?: 'Wishlists';
  items: Array<WhishlistNode>;
  totalItems: Scalars['Int'];
};

export type WishlistsFilterParameter = {
  totalItems?: InputMaybe<NumberOperators>;
};

export type WishlistsListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<WishlistsFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<WishlistsSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type WishlistsSortParameter = {
  totalItems?: InputMaybe<SortOrder>;
};

export type Zone = Node & {
  __typename?: 'Zone';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  members: Array<Country>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Unnamed_1_MutationVariables = Exact<{
  offerId: Scalars['ID'];
}>;


export type Unnamed_1_Mutation = { __typename?: 'Mutation', acceptOffer: { __typename?: 'OfferResult', success: boolean, message?: string | null, code?: number | null, offer?: { __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, quantity: number, expiresAt?: number | null, statusCode: number, showNoteToBuyer?: boolean | null, beforeExpireStatus?: number | null, note?: string | null, isFavorite?: boolean | null, forever?: boolean | null, uid?: string | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, order?: { __typename?: 'Order', id: string, code: string } | null, product: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, variantList: { __typename?: 'ProductVariantList', totalItems: number }, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, parent?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, children?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string }> | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> }>, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string } | null } | null } } | null } };

export type Unnamed_2_MutationVariables = Exact<{
  offerId: Scalars['ID'];
  offerUid: Scalars['String'];
  shippingMethodId: Scalars['ID'];
}>;


export type Unnamed_2_Mutation = { __typename?: 'Mutation', addOfferToOrderCustom: { __typename?: 'InsufficientStockError', errorCode: ErrorCode, message: string, quantityAvailable: number } | { __typename?: 'NegativeQuantityError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | { __typename?: 'OrderLimitError', errorCode: ErrorCode, message: string, maxItems: number } | { __typename?: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type Unnamed_3_MutationVariables = Exact<{
  offerId: Scalars['ID'];
  offeredPrice: Scalars['Float'];
  quantity: Scalars['Float'];
}>;


export type Unnamed_3_Mutation = { __typename?: 'Mutation', buyerMakeCounterOffer: { __typename?: 'OfferResult', success: boolean, message?: string | null, code?: number | null, offer?: { __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, quantity: number, expiresAt?: number | null, statusCode: number, showNoteToBuyer?: boolean | null, beforeExpireStatus?: number | null, note?: string | null, isFavorite?: boolean | null, forever?: boolean | null, uid?: string | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, order?: { __typename?: 'Order', id: string, code: string } | null, product: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, variantList: { __typename?: 'ProductVariantList', totalItems: number }, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, parent?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, children?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string }> | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> }>, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string } | null } | null } } | null } };

export type Unnamed_4_MutationVariables = Exact<{
  offerId: Scalars['ID'];
}>;


export type Unnamed_4_Mutation = { __typename?: 'Mutation', rejectOffer: { __typename?: 'OfferResult', success: boolean, message?: string | null, code?: number | null, offer?: { __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, quantity: number, expiresAt?: number | null, statusCode: number, showNoteToBuyer?: boolean | null, beforeExpireStatus?: number | null, note?: string | null, isFavorite?: boolean | null, forever?: boolean | null, uid?: string | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, order?: { __typename?: 'Order', id: string, code: string } | null, product: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, variantList: { __typename?: 'ProductVariantList', totalItems: number }, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, parent?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, children?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string }> | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> }>, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string } | null } | null } } | null } };

export type Unnamed_5_MutationVariables = Exact<{
  offerId: Scalars['ID'];
  offeredPrice: Scalars['Float'];
}>;


export type Unnamed_5_Mutation = { __typename?: 'Mutation', sellerMakeCounterOffer: { __typename?: 'OfferResult', success: boolean, message?: string | null, code?: number | null, offer?: { __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, quantity: number, expiresAt?: number | null, statusCode: number, showNoteToBuyer?: boolean | null, beforeExpireStatus?: number | null, note?: string | null, isFavorite?: boolean | null, forever?: boolean | null, uid?: string | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, order?: { __typename?: 'Order', id: string, code: string } | null, product: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, variantList: { __typename?: 'ProductVariantList', totalItems: number }, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, parent?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, children?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string }> | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> }>, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string } | null } | null } } | null } };

export type Unnamed_6_MutationVariables = Exact<{
  productId: Scalars['ID'];
  offeredPrice: Scalars['Float'];
  quantity: Scalars['Float'];
}>;


export type Unnamed_6_Mutation = { __typename?: 'Mutation', makeAnOfferToProduct: { __typename?: 'OfferResult', success: boolean, message?: string | null, code?: number | null } };

export type Unnamed_7_MutationVariables = Exact<{
  input: UpdateOrderInput;
}>;


export type Unnamed_7_Mutation = { __typename?: 'Mutation', setOrderCustomFields: { __typename?: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } };

export type Unnamed_8_MutationVariables = Exact<{
  input: PaymentInput;
}>;


export type Unnamed_8_Mutation = { __typename?: 'Mutation', addPaymentToOrder: { __typename?: 'IneligiblePaymentMethodError', errorCode: ErrorCode, message: string } | { __typename?: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | { __typename?: 'OrderPaymentStateError', errorCode: ErrorCode, message: string } | { __typename?: 'OrderStateTransitionError', errorCode: ErrorCode, message: string } | { __typename?: 'PaymentDeclinedError', errorCode: ErrorCode, message: string } | { __typename?: 'PaymentFailedError', errorCode: ErrorCode, message: string } };

export type Unnamed_9_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
  shippingMethodId: Scalars['ID'];
}>;


export type Unnamed_9_Mutation = { __typename?: 'Mutation', addItemToOrderCustom: { __typename?: 'InsufficientStockError', errorCode: ErrorCode, message: string, quantityAvailable: number, order: { __typename?: 'Order', id: string } } | { __typename?: 'NegativeQuantityError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | { __typename?: 'OrderLimitError', errorCode: ErrorCode, message: string, maxItems: number } | { __typename?: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type Unnamed_10_MutationVariables = Exact<{
  couponCode: Scalars['String'];
}>;


export type Unnamed_10_Mutation = { __typename?: 'Mutation', applyCouponCode: { __typename?: 'CouponCodeExpiredError', errorCode: ErrorCode, message: string, couponCode: string } | { __typename?: 'CouponCodeInvalidError', errorCode: ErrorCode, message: string, couponCode: string } | { __typename?: 'CouponCodeLimitError', errorCode: ErrorCode, message: string, couponCode: string } | { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } };

export type Unnamed_11_MutationVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_11_Mutation = { __typename?: 'Mutation', createStripePaymentIntent?: string | null };

export type Unnamed_12_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
  email: Scalars['String'];
}>;


export type Unnamed_12_Mutation = { __typename?: 'Mutation', abandonedCheckout: boolean };

export type Unnamed_13_MutationVariables = Exact<{
  couponCode: Scalars['String'];
}>;


export type Unnamed_13_Mutation = { __typename?: 'Mutation', removeCouponCode?: { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | null };

export type Unnamed_14_MutationVariables = Exact<{
  orderLineId: Scalars['ID'];
}>;


export type Unnamed_14_Mutation = { __typename?: 'Mutation', removeOrderLineCustom?: { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | { __typename?: 'OrderModificationError', errorCode: ErrorCode, message: string } | null };

export type Unnamed_15_MutationVariables = Exact<{
  input: CreateCustomerInput;
}>;


export type Unnamed_15_Mutation = { __typename?: 'Mutation', setCustomerForOrder: { __typename: 'AlreadyLoggedInError', errorCode: ErrorCode, message: string } | { __typename: 'EmailAddressConflictError', errorCode: ErrorCode, message: string } | { __typename: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } };

export type Unnamed_16_MutationVariables = Exact<{
  input: CreateAddressInput;
}>;


export type Unnamed_16_Mutation = { __typename?: 'Mutation', setOrderBillingAddress: { __typename?: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } };

export type Unnamed_17_MutationVariables = Exact<{
  input: CreateAddressInput;
}>;


export type Unnamed_17_Mutation = { __typename?: 'Mutation', setOrderShippingAddressCustom: { __typename?: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } };

export type Unnamed_18_MutationVariables = Exact<{
  shippingMethodId: Scalars['ID'];
  orderLineId: Scalars['ID'];
}>;


export type Unnamed_18_Mutation = { __typename?: 'Mutation', setOrderLineShippingMethodCustom: { __typename?: 'IneligibleShippingMethodError', errorCode: ErrorCode, message: string } | { __typename?: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | { __typename?: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type Unnamed_19_MutationVariables = Exact<{
  state: Scalars['String'];
}>;


export type Unnamed_19_Mutation = { __typename?: 'Mutation', transitionOrderToState?: { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | { __typename?: 'OrderStateTransitionError', errorCode: ErrorCode, message: string } | null };

export type Unnamed_20_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
}>;


export type Unnamed_20_Mutation = { __typename?: 'Mutation', addItemToWishlist: { __typename?: 'WhishlistNode', id: string } };

export type Unnamed_21_MutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type Unnamed_21_Mutation = { __typename?: 'Mutation', uploadExcelAndCreateRecord: string };

export type Unnamed_22_MutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type Unnamed_22_Mutation = { __typename?: 'Mutation', customerCreateProduct: { __typename?: 'CustomerCreateProductReturn', productId: string, productVariantId: string } };

export type Unnamed_23_MutationVariables = Exact<{
  assetId: Scalars['ID'];
  productId: Scalars['ID'];
}>;


export type Unnamed_23_Mutation = { __typename?: 'Mutation', customerDeleteProductImage?: any | null };

export type Unnamed_24_MutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Unnamed_24_Mutation = { __typename?: 'Mutation', customerDeleteProduct: { __typename?: 'DeletionResponse', result: DeletionResult, message?: string | null } };

export type Unnamed_25_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
}>;


export type Unnamed_25_Mutation = { __typename?: 'Mutation', deleteItemFromWishlist: { __typename?: 'WhishlistNode', id: string } };

export type Unnamed_26_MutationVariables = Exact<{
  relationId: Scalars['Int'];
  eventCategory: Scalars['String'];
  eventLabel: Scalars['String'];
  eventValue: Scalars['String'];
}>;


export type Unnamed_26_Mutation = { __typename?: 'Mutation', trackMetric: { __typename?: 'MetricResponse', success: boolean, message?: string | null } };

export type Unnamed_27_MutationVariables = Exact<{
  input: UpdateProductInput;
}>;


export type Unnamed_27_Mutation = { __typename?: 'Mutation', customerUpdateProduct: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, parent?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, children?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string }> | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> }> } };

export type Unnamed_28_MutationVariables = Exact<{
  typeAction?: InputMaybe<Scalars['String']>;
  input: Array<UpdateProductVariantInput> | UpdateProductVariantInput;
}>;


export type Unnamed_28_Mutation = { __typename?: 'Mutation', customerUpdateProductVariant: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null } | null> };

export type Unnamed_29_MutationVariables = Exact<{
  asset: Scalars['Upload'];
  productId: Scalars['ID'];
  type: Scalars['String'];
}>;


export type Unnamed_29_Mutation = { __typename?: 'Mutation', customerUploadProductImage?: { __typename?: 'Asset', id: string, preview: string, source: string, fileSize: number, width: number, height: number, name: string, createdAt: any, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null };

export type Unnamed_30_MutationVariables = Exact<{
  input: ContactUsInput;
}>;


export type Unnamed_30_Mutation = { __typename?: 'Mutation', contactUs?: boolean | null };

export type Unnamed_31_MutationVariables = Exact<{
  email: Scalars['String'];
  subject: Scalars['String'];
  content: Scalars['String'];
  intent?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_31_Mutation = { __typename?: 'Mutation', hubspotCreateTicket: { __typename?: 'HubspotCreateTicketResponse', status: boolean, errorCode?: number | null } };

export type Unnamed_32_MutationVariables = Exact<{
  input: CreateAddressInput;
}>;


export type Unnamed_32_Mutation = { __typename?: 'Mutation', createCustomerAddress: { __typename?: 'Address', id: string, city?: string | null, createdAt: any, updatedAt: any, fullName?: string | null, phoneNumber?: string | null, province?: string | null, streetLine1: string, streetLine2?: string | null, postalCode?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { __typename?: 'Country', code: string, name: string }, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, defaultPickupAddress?: boolean | null, emailAddress?: string | null, firstName?: string | null, lastName?: string | null } | null } };

export type Unnamed_33_MutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Unnamed_33_Mutation = { __typename?: 'Mutation', deleteCustomerAddress: { __typename?: 'Success', success: boolean } };

export type Unnamed_34_MutationVariables = Exact<{
  input: AuthenticationInput;
  rememberMe?: InputMaybe<Scalars['Boolean']>;
}>;


export type Unnamed_34_Mutation = { __typename?: 'Mutation', authenticate: { __typename?: 'CurrentUser', id: string } | { __typename?: 'InvalidCredentialsError', errorCode: ErrorCode, message: string, authenticationError: string } | { __typename?: 'NotVerifiedError', errorCode: ErrorCode, message: string } };

export type Unnamed_35_MutationVariables = Exact<{
  email: Scalars['String'];
  enable: Scalars['Boolean'];
  interest?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_35_Mutation = { __typename?: 'Mutation', manageNewsletter: { __typename?: 'NewsletterResponse', success: boolean, message?: string | null, userRegistered?: boolean | null, userHadNewsletterActive?: boolean | null } };

export type Unnamed_36_MutationVariables = Exact<{
  input: RegisterCustomerInput;
}>;


export type Unnamed_36_Mutation = { __typename?: 'Mutation', registerCustomerAccount: { __typename: 'MissingPasswordError', errorCode: ErrorCode, message: string } | { __typename: 'NativeAuthStrategyError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordValidationError', errorCode: ErrorCode, message: string, validationErrorMessage: string } | { __typename: 'Success', success: boolean } };

export type Unnamed_37_MutationVariables = Exact<{
  emailAddress: Scalars['String'];
}>;


export type Unnamed_37_Mutation = { __typename?: 'Mutation', requestPasswordReset?: { __typename: 'NativeAuthStrategyError', errorCode: ErrorCode, message: string } | { __typename: 'Success', success: boolean } | null };

export type Unnamed_38_MutationVariables = Exact<{
  password: Scalars['String'];
  token: Scalars['String'];
}>;


export type Unnamed_38_Mutation = { __typename?: 'Mutation', resetPassword: { __typename: 'CurrentUser', id: string } | { __typename: 'NativeAuthStrategyError', errorCode: ErrorCode, message: string } | { __typename: 'NotVerifiedError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordResetTokenExpiredError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordResetTokenInvalidError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordValidationError', errorCode: ErrorCode, message: string, validationErrorMessage: string } };

export type Unnamed_39_MutationVariables = Exact<{
  email: Scalars['String'];
  properties: Array<PropertyHubstpot> | PropertyHubstpot;
}>;


export type Unnamed_39_Mutation = { __typename?: 'Mutation', updateHubspotContact: { __typename?: 'HubspotResponse', success: boolean, message?: string | null } };

export type Unnamed_40_MutationVariables = Exact<{
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type Unnamed_40_Mutation = { __typename?: 'Mutation', updateCustomerPassword: { __typename: 'InvalidCredentialsError', errorCode: ErrorCode, message: string, authenticationError: string } | { __typename: 'NativeAuthStrategyError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordValidationError', errorCode: ErrorCode, message: string, validationErrorMessage: string } | { __typename: 'Success', success: boolean } };

export type Unnamed_41_MutationVariables = Exact<{
  input: UpdateCustomerInput;
}>;


export type Unnamed_41_Mutation = { __typename?: 'Mutation', updateCustomer: { __typename?: 'Customer', firstName: string } };

export type Unnamed_42_MutationVariables = Exact<{
  input: UpdateAddressInput;
}>;


export type Unnamed_42_Mutation = { __typename?: 'Mutation', updateCustomerAddress: { __typename?: 'Address', id: string, city?: string | null, createdAt: any, updatedAt: any, fullName?: string | null, phoneNumber?: string | null, province?: string | null, streetLine1: string, streetLine2?: string | null, postalCode?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { __typename?: 'Country', code: string, name: string }, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, defaultPickupAddress?: boolean | null, emailAddress?: string | null, firstName?: string | null, lastName?: string | null } | null } };

export type Unnamed_43_MutationVariables = Exact<{
  customerGroupName: Scalars['String'];
}>;


export type Unnamed_43_Mutation = { __typename?: 'Mutation', addCustomerToGroup?: boolean | null };

export type Unnamed_44_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_44_Query = { __typename?: 'Query', getReceivedOffers: { __typename?: 'OfferList', totalItems: number, items: Array<{ __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, quantity: number, expiresAt?: number | null, statusCode: number, showNoteToBuyer?: boolean | null, beforeExpireStatus?: number | null, note?: string | null, isFavorite?: boolean | null, forever?: boolean | null, uid?: string | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, order?: { __typename?: 'Order', id: string, code: string } | null, product: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, variantList: { __typename?: 'ProductVariantList', totalItems: number }, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, parent?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, children?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string }> | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> }>, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string } | null } | null } }> } };

export type Unnamed_45_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_45_Query = { __typename?: 'Query', getSentOffers: { __typename?: 'OfferList', totalItems: number, items: Array<{ __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, quantity: number, expiresAt?: number | null, statusCode: number, showNoteToBuyer?: boolean | null, beforeExpireStatus?: number | null, note?: string | null, isFavorite?: boolean | null, forever?: boolean | null, uid?: string | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, order?: { __typename?: 'Order', id: string, code: string } | null, product: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, variantList: { __typename?: 'ProductVariantList', totalItems: number }, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, parent?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, children?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string }> | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> }>, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string } | null } | null } }> } };

export type Unnamed_46_QueryVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type Unnamed_46_Query = { __typename?: 'Query', hasOfferOnGoing: boolean };

export type Unnamed_47_QueryVariables = Exact<{
  take: Scalars['Int'];
  type: Scalars['String'];
}>;


export type Unnamed_47_Query = { __typename?: 'Query', myFirstNOffers?: { __typename?: 'MyFirstOfferList', items: Array<{ __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, quantity: number, expiresAt?: number | null, statusCode: number, showNoteToBuyer?: boolean | null, beforeExpireStatus?: number | null, note?: string | null, isFavorite?: boolean | null, forever?: boolean | null, uid?: string | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, order?: { __typename?: 'Order', id: string, code: string } | null, product: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, variantList: { __typename?: 'ProductVariantList', totalItems: number }, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, parent?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, children?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string }> | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> }>, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string } | null } | null } }>, totalItems?: Array<{ __typename?: 'MyFirstOfferListTotalItem', count?: number | null, offerStatus?: number | null } | null> | null } | null };

export type Unnamed_48_QueryVariables = Exact<{
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>>;
  options?: InputMaybe<OfferListOptions>;
}>;


export type Unnamed_48_Query = { __typename?: 'Query', getReceivedOffers: { __typename?: 'OfferList', totalItems: number, items: Array<{ __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, quantity: number, expiresAt?: number | null, statusCode: number, showNoteToBuyer?: boolean | null, beforeExpireStatus?: number | null, note?: string | null, isFavorite?: boolean | null, forever?: boolean | null, uid?: string | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, order?: { __typename?: 'Order', id: string, code: string } | null, product: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, variantList: { __typename?: 'ProductVariantList', totalItems: number }, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, parent?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, children?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string }> | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> }>, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string } | null } | null } }> } };

export type Unnamed_49_QueryVariables = Exact<{
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>>;
  options?: InputMaybe<OfferListOptions>;
}>;


export type Unnamed_49_Query = { __typename?: 'Query', getSentOffers: { __typename?: 'OfferList', totalItems: number, items: Array<{ __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, quantity: number, expiresAt?: number | null, statusCode: number, showNoteToBuyer?: boolean | null, beforeExpireStatus?: number | null, note?: string | null, isFavorite?: boolean | null, forever?: boolean | null, uid?: string | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, order?: { __typename?: 'Order', id: string, code: string } | null, product: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, variantList: { __typename?: 'ProductVariantList', totalItems: number }, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, parent?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, children?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string }> | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> }>, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string } | null } | null } }> } };

export type Unnamed_50_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_50_Query = { __typename?: 'Query', activeOrder?: { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | null };

export type Unnamed_51_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_51_Query = { __typename?: 'Query', activeCustomer?: { __typename?: 'Customer', orders: { __typename?: 'OrderList', totalItems: number, items: Array<{ __typename: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null }> } } | null };

export type Unnamed_52_QueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type Unnamed_52_Query = { __typename?: 'Query', orderByCode?: { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | null };

export type Unnamed_53_QueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Unnamed_53_Query = { __typename?: 'Query', order?: { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', courierTracking?: string | null, courierName?: string | null, extraServicePrice?: number | null, shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', name: string, code: string, label: string }> | null } | null }> } } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | null };

export type Unnamed_54_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_54_Query = { __typename?: 'Query', eligiblePaymentMethods: Array<{ __typename?: 'PaymentMethodQuote', id: string, name: string, code: string, description: string, isEligible: boolean, eligibilityMessage?: string | null, customFields?: { __typename?: 'PaymentMethodCustomFields', order?: number | null } | null }> };

export type Unnamed_55_QueryVariables = Exact<{
  productVariantId: Scalars['ID'];
  countryCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type Unnamed_55_Query = { __typename?: 'Query', getShippingMethodsWithPrice?: Array<{ __typename?: 'ResponseShippingMethodsPrice', code: string, price: number, label?: string | null, country?: string | null, shippingMethodId?: string | null } | null> | null };

export type Unnamed_56_QueryVariables = Exact<{
  statusIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type Unnamed_56_Query = { __typename?: 'Query', myProducts?: { __typename: 'ProductList', totalItems: number } | null };

export type Unnamed_57_QueryVariables = Exact<{
  take: Scalars['Int'];
}>;


export type Unnamed_57_Query = { __typename?: 'Query', myFirstNProducts?: { __typename?: 'MyFirstProductList', totalItems?: Array<{ __typename?: 'MyFirstProductListTotalItem', multivendorStatus?: number | null, count?: number | null } | null> | null, items: Array<{ __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, viewsCount: number, wishlistCount: number, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, options: Array<{ __typename?: 'ProductOption', id: string, languageCode: LanguageCode, code: string, name: string, groupId: string, group: { __typename?: 'ProductOptionGroup', name: string } }>, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, soldPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }> }> } | null };

export type Unnamed_58_QueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Unnamed_58_Query = { __typename?: 'Query', myProduct?: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, options: Array<{ __typename?: 'ProductOption', id: string, languageCode: LanguageCode, code: string, name: string, groupId: string, group: { __typename?: 'ProductOptionGroup', name: string } }>, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, soldPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, parent?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, children?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string }> | null }> } | null };

export type Unnamed_59_QueryVariables = Exact<{
  multivendorStatus: Array<Scalars['String']> | Scalars['String'];
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_59_Query = { __typename?: 'Query', myProducts?: { __typename: 'ProductList', totalItems: number, items: Array<{ __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, viewsCount: number, wishlistCount: number, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, options: Array<{ __typename?: 'ProductOption', id: string, languageCode: LanguageCode, code: string, name: string, groupId: string, group: { __typename?: 'ProductOptionGroup', name: string } }>, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, soldPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }> }> } | null };

export type Unnamed_60_QueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_60_Query = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, onHold?: boolean | null, SEOTitle?: string | null, SEODescription?: string | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, variantList: { __typename?: 'ProductVariantList', totalItems: number }, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, parent?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, children?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string }> | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> }>, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null, sellerSubType?: string | null, sellerCustomFee?: number | null } | null } | null } | null } | null };

export type Unnamed_61_QueryVariables = Exact<{
  productId?: InputMaybe<Scalars['ID']>;
}>;


export type Unnamed_61_Query = { __typename?: 'Query', getCustomerFee?: { __typename?: 'CustomerFeeProductReturn', fee: number, counterProducts?: number | null, isProductFee?: boolean | null } | null };

export type Unnamed_62_QueryVariables = Exact<{
  productVariantId: Scalars['ID'];
}>;


export type Unnamed_62_Query = { __typename?: 'Query', countWishlistFor: { __typename?: 'WishlistCounter', counter: number, haveCurrent?: boolean | null } };

export type Unnamed_63_QueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type Unnamed_63_Query = { __typename?: 'Query', search: { __typename?: 'SearchResponse', totalItems: number, items: Array<{ __typename?: 'SearchResult', productId: string, productName: string, slug: string, inStock?: boolean | null, productVariantId: string, productVariantName: string, collectionIds: Array<string>, sku: string, productAsset?: { __typename?: 'SearchResultAsset', preview: string } | null, priceWithTax: { __typename: 'PriceRange' } | { __typename: 'SinglePrice', value: number }, customMappings: { __typename?: 'CustomProductMappings', featuredProduct?: boolean | null } | { __typename?: 'CustomProductVariantMappings', sellerType?: string | null, localPickupEnabled?: boolean | null, brandIds?: Array<string> | null, createDateTime?: number | null, publishDate?: number | null, reducePriceDate?: number | null } }> } };

export type Unnamed_64_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_64_Query = { __typename?: 'Query', myWishlist: { __typename?: 'WhishlistNode', id: string, name: string, default: boolean, user: { __typename?: 'User', id: string }, items: Array<{ __typename?: 'WishlistItem', id: string, productVariant?: { __typename?: 'ProductVariant', product: { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, variants: Array<{ __typename?: 'ProductVariant', id: string, productId: string, createdAt: any, updatedAt: any, languageCode: LanguageCode, sku: string, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockLevel: string, assets: Array<{ __typename?: 'Asset', id: string, updatedAt: any, name: string, type: AssetType, fileSize: number, width: number, height: number, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null, options: Array<{ __typename?: 'ProductOption', id: string, languageCode: LanguageCode, code: string, name: string, groupId: string, group: { __typename?: 'ProductOptionGroup', name: string } }>, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }>, translations: Array<{ __typename?: 'ProductVariantTranslation', languageCode: LanguageCode, name: string }>, customFields?: { __typename?: 'ProductVariantCustomFields', regularPrice?: number | null, multivendorStatus?: string | null, multivendorStatusDate?: any | null, publishDate?: any | null, reducePriceDate?: any | null, submissionLanguage?: string | null, story?: string | null, soldIndividually?: boolean | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null, earning?: number | null, percentageFee?: number | null, shippingClass?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, weight?: number | null, width?: string | null, depth?: string | null, height?: string | null, heightSeat?: string | null, seoMetaDescription?: string | null, seoKeyWords?: string | null, offerEnabled?: boolean | null, offerAutoAcceptEnabled?: boolean | null, offerAutoAcceptPercentage?: number | null, offerAutoAcceptPrice?: number | null, isLampIncluded?: boolean | null, isOutProduction?: boolean | null, customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, woocommerceProductId?: number | null, seoSlug?: string | null, attributesText?: string | null, shippingPriceLocal?: number | null, shippingPriceInternational?: number | null, designer?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, style?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, condition?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> | null, primaryCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string, position: number, description: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null } | null }>, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }>, translations: Array<{ __typename?: 'ProductTranslation', id: string, languageCode: LanguageCode, slug: string, name: string, description: string }> } } | null }> } };

export type Unnamed_65_QueryVariables = Exact<{
  facet: Scalars['String'];
}>;


export type Unnamed_65_Query = { __typename?: 'Query', facets: { __typename?: 'FacetList', items: Array<{ __typename?: 'Facet', code: string, id: string, values: Array<{ __typename?: 'FacetValue', name: string, id: string, label: string, slug: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null, featured?: boolean | null } | null }> }> } };

export type Unnamed_66_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_66_Query = { __typename?: 'Query', search: { __typename?: 'SearchResponse', totalItems: number, items: Array<{ __typename?: 'SearchResult', productId: string, productName: string, slug: string, inStock?: boolean | null, productVariantId: string, productVariantName: string, collectionIds: Array<string>, sku: string, productAsset?: { __typename?: 'SearchResultAsset', preview: string } | null, priceWithTax: { __typename: 'PriceRange' } | { __typename: 'SinglePrice', value: number }, customMappings: { __typename?: 'CustomProductMappings', featuredProduct?: boolean | null } | { __typename?: 'CustomProductVariantMappings', sellerType?: string | null, localPickupEnabled?: boolean | null, brandIds?: Array<string> | null, createDateTime?: number | null, publishDate?: number | null, reducePriceDate?: number | null, onHold?: boolean | null } }> } };

export type Unnamed_67_QueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_67_Query = { __typename?: 'Query', search: { __typename?: 'SearchResponse', totalItems: number, items: Array<{ __typename?: 'SearchResult', productId: string, productName: string, slug: string, inStock?: boolean | null, productVariantId: string, productVariantName: string, collectionIds: Array<string>, sku: string, productAsset?: { __typename?: 'SearchResultAsset', preview: string } | null, priceWithTax: { __typename: 'PriceRange' } | { __typename: 'SinglePrice', value: number }, customMappings: { __typename?: 'CustomProductMappings', featuredProduct?: boolean | null } | { __typename?: 'CustomProductVariantMappings', sellerType?: string | null, localPickupEnabled?: boolean | null, brandIds?: Array<string> | null, createDateTime?: number | null, publishDate?: number | null, reducePriceDate?: number | null, onHold?: boolean | null } }> } };

export type Unnamed_68_QueryVariables = Exact<{
  input: SearchInput;
}>;


export type Unnamed_68_Query = { __typename?: 'Query', search: { __typename?: 'SearchResponse', totalItems: number, items: Array<{ __typename?: 'SearchResult', productId: string, productName: string, slug: string, inStock?: boolean | null, productVariantId: string, productVariantName: string, collectionIds: Array<string>, sku: string, productAsset?: { __typename?: 'SearchResultAsset', preview: string } | null, priceWithTax: { __typename: 'PriceRange' } | { __typename: 'SinglePrice', value: number }, customMappings: { __typename?: 'CustomProductMappings', featuredProduct?: boolean | null } | { __typename?: 'CustomProductVariantMappings', sellerType?: string | null, localPickupEnabled?: boolean | null, brandIds?: Array<string> | null, createDateTime?: number | null, publishDate?: number | null, reducePriceDate?: number | null, onHold?: boolean | null } }> } };

export type Unnamed_69_MutationVariables = Exact<{
  productId: Scalars['ID'];
  wishlistId?: InputMaybe<Scalars['ID']>;
}>;


export type Unnamed_69_Mutation = { __typename?: 'Mutation', addItemToWishlist: { __typename?: 'WhishlistNode', id: string, name: string, items: Array<{ __typename?: 'WishlistItem', productVariant?: { __typename?: 'ProductVariant', id: string } | null }> } };

export type Unnamed_70_MutationVariables = Exact<{
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  street: Scalars['String'];
  city?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  countryCode: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultPickupAddress?: InputMaybe<Scalars['Boolean']>;
}>;


export type Unnamed_70_Mutation = { __typename?: 'Mutation', createCustomerAddress: { __typename?: 'Address', id: string, phoneNumber?: string | null, streetLine1: string, city?: string | null, province?: string | null, postalCode?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { __typename?: 'Country', code: string, name: string } } };

export type Unnamed_71_MutationVariables = Exact<{
  addressId: Scalars['ID'];
}>;


export type Unnamed_71_Mutation = { __typename?: 'Mutation', deleteCustomerAddress: { __typename?: 'Success', success: boolean } };

export type Unnamed_72_MutationVariables = Exact<{
  addressId: Scalars['ID'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultPickupAddress?: InputMaybe<Scalars['Boolean']>;
}>;


export type Unnamed_72_Mutation = { __typename?: 'Mutation', updateCustomerAddress: { __typename?: 'Address', id: string, phoneNumber?: string | null, streetLine1: string, city?: string | null, province?: string | null, postalCode?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { __typename?: 'Country', code: string, name: string } } };

export type Unnamed_73_MutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  rememberMe?: InputMaybe<Scalars['Boolean']>;
}>;


export type Unnamed_73_Mutation = { __typename?: 'Mutation', authenticate: { __typename?: 'CurrentUser', id: string, identifier: string, channels: Array<{ __typename?: 'CurrentUserChannel', id: string, token: string, code: string, permissions: Array<Permission> }> } | { __typename?: 'InvalidCredentialsError', errorCode: ErrorCode, message: string, authenticationError: string } | { __typename?: 'NotVerifiedError', errorCode: ErrorCode, message: string } };

export type Unnamed_74_MutationVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_74_Mutation = { __typename?: 'Mutation', logout: { __typename?: 'Success', success: boolean } };

export type Unnamed_75_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_75_Query = { __typename?: 'Query', activeCustomer?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string, phoneNumber?: string | null, addresses?: Array<{ __typename?: 'Address', id: string, phoneNumber?: string | null, streetLine1: string, city?: string | null, province?: string | null, postalCode?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { __typename?: 'Country', code: string, name: string }, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, defaultPickupAddress?: boolean | null } | null }> | null, customFields?: { __typename?: 'CustomerCustomFields', lastLoginDate?: any | null, language?: string | null, newsletterActive?: boolean | null, birthdate?: any | null, onHolidays?: boolean | null, gender?: string | null, fiscalCode?: string | null, IBAN?: string | null, billingVat?: string | null, bankAccountHolder?: string | null, registrationDate?: any | null, sourceRegistration?: string | null, registrationUtmCampaign?: string | null, registrationUtmMedium?: string | null, registrationUtmSource?: string | null, sellerType?: string | null, sellerSubType?: string | null, sellerCustomFee?: number | null, commercialRef?: string | null, website?: string | null, shopName?: string | null, priceMode?: string | null, username?: string | null, tradeRole?: string | null, tradeStudioName?: string | null, tradeStudioWebsite?: string | null, tradeProjectsPerYear?: string | null, tradeProjectsType?: string | null, ibanCountry?: { __typename?: 'Country', code: string, name: string } | null } | null } | null };

export type Unnamed_76_MutationVariables = Exact<{
  method: Scalars['String'];
  metadata: Scalars['JSON'];
}>;


export type Unnamed_76_Mutation = { __typename?: 'Mutation', addPaymentToOrder: { __typename?: 'IneligiblePaymentMethodError', errorCode: ErrorCode, message: string } | { __typename?: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, payments?: Array<{ __typename?: 'Payment', id: string, amount: number, errorMessage?: string | null, method: string, state: string, transactionId?: string | null, createdAt: any }> | null } | { __typename?: 'OrderPaymentStateError', errorCode: ErrorCode, message: string } | { __typename?: 'OrderStateTransitionError', errorCode: ErrorCode, message: string } | { __typename?: 'PaymentDeclinedError', errorCode: ErrorCode, message: string } | { __typename?: 'PaymentFailedError', errorCode: ErrorCode, message: string } };

export type Unnamed_77_MutationVariables = Exact<{
  couponCode: Scalars['String'];
}>;


export type Unnamed_77_Mutation = { __typename?: 'Mutation', applyCouponCode: { __typename?: 'CouponCodeExpiredError', errorCode: ErrorCode, message: string, couponCode: string } | { __typename?: 'CouponCodeInvalidError', errorCode: ErrorCode, message: string, couponCode: string } | { __typename?: 'CouponCodeLimitError', errorCode: ErrorCode, message: string, couponCode: string } | { __typename?: 'Order', id: string, discounts: Array<{ __typename?: 'Discount', type: AdjustmentType, description: string, amount: number, amountWithTax: number }> } };

export type Unnamed_78_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
  email: Scalars['String'];
}>;


export type Unnamed_78_Mutation = { __typename?: 'Mutation', abandonedCheckout: boolean };

export type Unnamed_79_MutationVariables = Exact<{
  couponCode: Scalars['String'];
}>;


export type Unnamed_79_Mutation = { __typename?: 'Mutation', removeCouponCode?: { __typename?: 'Order', id: string } | null };

export type Unnamed_80_MutationVariables = Exact<{
  orderLineId: Scalars['ID'];
}>;


export type Unnamed_80_Mutation = { __typename?: 'Mutation', removeOrderLine: { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, streetLine1?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }> }, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null } | null } }>, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | { __typename?: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type Unnamed_81_MutationVariables = Exact<{
  fullName?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  city?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  countryCode: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_81_Mutation = { __typename?: 'Mutation', setOrderBillingAddress: { __typename?: 'NoActiveOrderError' } | { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, streetLine1?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string } }>, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number }> } };

export type Unnamed_82_MutationVariables = Exact<{
  customerNote?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_82_Mutation = { __typename?: 'Mutation', setOrderCustomFields: { __typename?: 'NoActiveOrderError' } | { __typename?: 'Order', id: string } };

export type Unnamed_83_MutationVariables = Exact<{
  fullName?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  city?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  countryCode: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_83_Mutation = { __typename?: 'Mutation', setOrderShippingAddress: { __typename?: 'NoActiveOrderError' } | { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, streetLine1?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string } }>, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number }> } };

export type Unnamed_84_MutationVariables = Exact<{
  shippingMethodId: Scalars['ID'];
  orderLineId: Scalars['ID'];
}>;


export type Unnamed_84_Mutation = { __typename?: 'Mutation', setOrderLineShippingMethodCustom: { __typename?: 'IneligibleShippingMethodError' } | { __typename?: 'NoActiveOrderError' } | { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, streetLine1?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string } }>, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number }> } | { __typename?: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type Unnamed_85_MutationVariables = Exact<{
  state: Scalars['String'];
}>;


export type Unnamed_85_Mutation = { __typename?: 'Mutation', transitionOrderToState?: { __typename?: 'Order', id: string } | { __typename?: 'OrderStateTransitionError', errorCode: ErrorCode, message: string } | null };

export type Unnamed_86_MutationVariables = Exact<{
  cardHolderName: Scalars['String'];
  cardNumber: Scalars['String'];
  cardExpirationDate: Scalars['String'];
}>;


export type Unnamed_86_Mutation = { __typename?: 'Mutation', createCard: { __typename?: 'Card', id: string, cardNumber: string, cardHolderName: string, cardExpiredDate: string } };

export type Unnamed_87_MutationVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_87_Mutation = { __typename?: 'Mutation', createStripePaymentIntent?: string | null };

export type Unnamed_88_MutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Unnamed_88_Mutation = { __typename?: 'Mutation', deleteCard: { __typename?: 'Card', id: string } };

export type Unnamed_89_MutationVariables = Exact<{
  productId: Scalars['ID'];
  wishlistId?: InputMaybe<Scalars['ID']>;
}>;


export type Unnamed_89_Mutation = { __typename?: 'Mutation', deleteItemFromWishlist: { __typename?: 'WhishlistNode', id: string, name: string, items: Array<{ __typename?: 'WishlistItem', productVariant?: { __typename?: 'ProductVariant', id: string } | null }> } };

export type Unnamed_90_MutationVariables = Exact<{
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  sellerType?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_90_Mutation = { __typename?: 'Mutation', setCustomerForOrder: { __typename: 'AlreadyLoggedInError' } | { __typename: 'EmailAddressConflictError' } | { __typename: 'NoActiveOrderError' } | { __typename: 'Order' } };

export type Unnamed_91_MutationVariables = Exact<{
  email: Scalars['String'];
  properties: Array<PropertyHubstpot> | PropertyHubstpot;
}>;


export type Unnamed_91_Mutation = { __typename?: 'Mutation', updateContact: { __typename?: 'HubspotResponse', success: boolean, message?: string | null } };

export type Unnamed_92_MutationVariables = Exact<{
  email: Scalars['String'];
  properties: Array<PropertyHubstpot> | PropertyHubstpot;
}>;


export type Unnamed_92_Mutation = { __typename?: 'Mutation', updateHubspotContact: { __typename?: 'HubspotResponse', success: boolean, message?: string | null } };

export type Unnamed_93_MutationVariables = Exact<{
  payload: ContactUsInput;
}>;


export type Unnamed_93_Mutation = { __typename?: 'Mutation', contactUs?: boolean | null };

export type Unnamed_94_MutationVariables = Exact<{
  offerId: Scalars['ID'];
}>;


export type Unnamed_94_Mutation = { __typename?: 'Mutation', acceptOffer: { __typename?: 'OfferResult', success: boolean, message?: string | null, code?: number | null, offer?: { __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, statusCode: number, expiresAt?: number | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, product: { __typename?: 'Product', id: string, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string } | null } | null } } | null } };

export type Unnamed_95_MutationVariables = Exact<{
  offerID: Scalars['ID'];
  offerUID: Scalars['String'];
  shippingMethodId: Scalars['ID'];
}>;


export type Unnamed_95_Mutation = { __typename?: 'Mutation', addOfferToOrderCustom: { __typename?: 'InsufficientStockError' } | { __typename?: 'NegativeQuantityError' } | { __typename?: 'Order', state: string } | { __typename?: 'OrderLimitError' } | { __typename?: 'OrderModificationError' } };

export type Unnamed_96_MutationVariables = Exact<{
  offerId: Scalars['ID'];
  offeredPrice: Scalars['Float'];
  quantity: Scalars['Float'];
}>;


export type Unnamed_96_Mutation = { __typename?: 'Mutation', buyerMakeCounterOffer: { __typename?: 'OfferResult', success: boolean, message?: string | null, code?: number | null, offer?: { __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, statusCode: number, expiresAt?: number | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, product: { __typename?: 'Product', id: string, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string } | null } | null } } | null } };

export type Unnamed_97_QueryVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type Unnamed_97_Query = { __typename?: 'Query', hasOfferOnGoing: boolean };

export type Unnamed_98_MutationVariables = Exact<{
  offerId: Scalars['ID'];
}>;


export type Unnamed_98_Mutation = { __typename?: 'Mutation', rejectOffer: { __typename?: 'OfferResult', success: boolean, message?: string | null, code?: number | null, offer?: { __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, statusCode: number, expiresAt?: number | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, product: { __typename?: 'Product', id: string, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string } | null } | null } } | null } };

export type Unnamed_99_MutationVariables = Exact<{
  offerId: Scalars['ID'];
  offeredPrice: Scalars['Float'];
}>;


export type Unnamed_99_Mutation = { __typename?: 'Mutation', sellerMakeCounterOffer: { __typename?: 'OfferResult', success: boolean, message?: string | null, code?: number | null, offer?: { __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, statusCode: number, expiresAt?: number | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, product: { __typename?: 'Product', id: string, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string } | null } | null } } | null } };

export type Unnamed_100_MutationVariables = Exact<{
  productId: Scalars['ID'];
  offeredPrice: Scalars['Float'];
  quantity: Scalars['Float'];
}>;


export type Unnamed_100_Mutation = { __typename?: 'Mutation', makeAnOfferToProduct: { __typename?: 'OfferResult', success: boolean, message?: string | null, code?: number | null, offer?: { __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, statusCode: number, expiresAt?: number | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, product: { __typename?: 'Product', id: string, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', id: string } | null } | null } } | null } };

export type Unnamed_101_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
  shippingMethodId: Scalars['ID'];
}>;


export type Unnamed_101_Mutation = { __typename?: 'Mutation', addItemToOrderCustom: { __typename?: 'InsufficientStockError', errorCode: ErrorCode, message: string, quantityAvailable: number, order: { __typename?: 'Order', id: string } } | { __typename?: 'NegativeQuantityError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, code: string, state: string, active: boolean, total: number, subTotal: number, customer?: { __typename?: 'Customer', id: string, firstName: string, lastName: string } | null, lines: Array<{ __typename?: 'OrderLine', customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', shippingMethod: { __typename?: 'ShippingMethod', code: string } } | null } | null, discounts: Array<{ __typename?: 'Discount', amountWithTax: number }>, items: Array<{ __typename?: 'OrderItem', unitPriceWithTax: number }> }>, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', code: string }, discounts: Array<{ __typename?: 'Discount', amountWithTax: number }> }> } | { __typename?: 'OrderLimitError', errorCode: ErrorCode, message: string, maxItems: number } | { __typename?: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type Unnamed_102_MutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  languageCode: LanguageCode;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  assetIds?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type Unnamed_102_Mutation = { __typename?: 'Mutation', customerCreateProduct: { __typename?: 'CustomerCreateProductReturn', productId: string, productVariantId: string } };

export type Unnamed_103_MutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Unnamed_103_Mutation = { __typename?: 'Mutation', customerDeleteProduct: { __typename?: 'DeletionResponse', result: DeletionResult, message?: string | null } };

export type Unnamed_104_MutationVariables = Exact<{
  assetId: Scalars['ID'];
  productId: Scalars['ID'];
}>;


export type Unnamed_104_Mutation = { __typename?: 'Mutation', customerDeleteProductImage?: any | null };

export type Unnamed_105_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
  submissionLanguage?: InputMaybe<Scalars['String']>;
  offerEnabled?: InputMaybe<Scalars['Boolean']>;
  percentageFee?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_105_Mutation = { __typename?: 'Mutation', customerUpdateProductVariant: Array<{ __typename?: 'ProductVariant', name: string, product: { __typename?: 'Product', name: string, slug: string } } | null> };

export type UpdateProductMutationVariables = Exact<{
  productId: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  assetIds?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', customerUpdateProduct: { __typename: 'Product', id: string, slug: string, name: string } };

export type Unnamed_106_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  sku: Scalars['String'];
  conditionIds?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  shippingLocalPickupEnabled?: InputMaybe<Scalars['Boolean']>;
  shippingCountryCode?: InputMaybe<Scalars['String']>;
  shippingCity?: InputMaybe<Scalars['String']>;
  materialIds?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  colorIds?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  depth?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  heightSeat?: InputMaybe<Scalars['String']>;
  isLampIncluded?: InputMaybe<Scalars['Boolean']>;
  isOutProduction?: InputMaybe<Scalars['Boolean']>;
  languageCode: LanguageCode;
  actionType?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_106_Mutation = { __typename?: 'Mutation', customerUpdateProductVariant: Array<{ __typename?: 'ProductVariant', name: string, product: { __typename?: 'Product', name: string, slug: string, variants: Array<{ __typename?: 'ProductVariant', price: number }> } } | null> };

export type Unnamed_107_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  sku: Scalars['String'];
  designers?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  customDesigner?: InputMaybe<Scalars['String']>;
  brands?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  customBrand?: InputMaybe<Scalars['String']>;
  hasNoBrand?: InputMaybe<Scalars['Boolean']>;
  styles?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  assetIds?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  primaryCategoryId?: InputMaybe<Scalars['ID']>;
  actionType?: InputMaybe<Scalars['String']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  selectedCategoryId?: InputMaybe<Scalars['ID']>;
}>;


export type Unnamed_107_Mutation = { __typename?: 'Mutation', customerUpdateProductVariant: Array<{ __typename?: 'ProductVariant', name: string, product: { __typename?: 'Product', name: string, slug: string } } | null> };

export type Unnamed_108_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
  sku: Scalars['String'];
  shippingLocalPickupEnabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  languageCode: LanguageCode;
  actionType?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_108_Mutation = { __typename?: 'Mutation', customerUpdateProductVariant: Array<{ __typename?: 'ProductVariant', name: string, product: { __typename?: 'Product', name: string, slug: string, variants: Array<{ __typename?: 'ProductVariant', customFields?: { __typename?: 'ProductVariantCustomFields', shippingLocalPickupEnabled?: boolean | null } | null }> } } | null> };

export type Unnamed_109_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
  sku: Scalars['String'];
  multivendorStatus?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  languageCode: LanguageCode;
  actionType?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_109_Mutation = { __typename?: 'Mutation', customerUpdateProductVariant: Array<{ __typename?: 'ProductVariant', name: string, product: { __typename?: 'Product', name: string, slug: string } } | null> };

export type Unnamed_110_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
  sku: Scalars['String'];
  price?: InputMaybe<Scalars['Int']>;
  reservePrice?: InputMaybe<Scalars['Int']>;
  limitPrice?: InputMaybe<Scalars['Int']>;
  retailPrice?: InputMaybe<Scalars['Int']>;
  earning?: InputMaybe<Scalars['Int']>;
  stockOnHand?: InputMaybe<Scalars['Int']>;
  soldIndividually?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  languageCode: LanguageCode;
  story?: InputMaybe<Scalars['String']>;
  actionType?: InputMaybe<Scalars['String']>;
  percentageFee?: InputMaybe<Scalars['Int']>;
}>;


export type Unnamed_110_Mutation = { __typename?: 'Mutation', customerUpdateProductVariant: Array<{ __typename?: 'ProductVariant', name: string, product: { __typename?: 'Product', name: string, slug: string, variants: Array<{ __typename?: 'ProductVariant', price: number, customFields?: { __typename?: 'ProductVariantCustomFields', earning?: number | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null } | null }> } } | null> };

export type Unnamed_111_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
  sku: Scalars['String'];
  stockOnHand?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  languageCode: LanguageCode;
  actionType?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_111_Mutation = { __typename?: 'Mutation', customerUpdateProductVariant: Array<{ __typename?: 'ProductVariant', name: string, product: { __typename?: 'Product', name: string, slug: string } } | null> };

export type Unnamed_112_MutationVariables = Exact<{
  productVariantId: Scalars['ID'];
  sku: Scalars['String'];
  price?: InputMaybe<Scalars['Int']>;
  reservePrice?: InputMaybe<Scalars['Int']>;
  limitPrice?: InputMaybe<Scalars['Int']>;
  retailPrice?: InputMaybe<Scalars['Int']>;
  earning?: InputMaybe<Scalars['Int']>;
  percentageFee?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  languageCode: LanguageCode;
  actionType?: InputMaybe<Scalars['String']>;
  reducePriceDate?: InputMaybe<Scalars['DateTime']>;
}>;


export type Unnamed_112_Mutation = { __typename?: 'Mutation', customerUpdateProductVariant: Array<{ __typename?: 'ProductVariant', name: string, product: { __typename?: 'Product', name: string, slug: string, variants: Array<{ __typename?: 'ProductVariant', price: number, customFields?: { __typename?: 'ProductVariantCustomFields', earning?: number | null, reservePrice?: number | null, limitPrice?: number | null, retailPrice?: number | null } | null }> } } | null> };

export type Unnamed_113_MutationVariables = Exact<{
  image: Scalars['Upload'];
  productId: Scalars['ID'];
  type: Scalars['String'];
}>;


export type Unnamed_113_Mutation = { __typename?: 'Mutation', customerUploadProductImage?: { __typename?: 'Asset', id: string, preview: string, source: string, fileSize: number, width: number, height: number, name: string, createdAt: any, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null } | null };

export type Unnamed_114_MutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  enable: Scalars['Boolean'];
  sellerType?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastLoginDate?: InputMaybe<Scalars['DateTime']>;
  registrationDate?: InputMaybe<Scalars['DateTime']>;
  registrationUtmCampaign?: InputMaybe<Scalars['String']>;
  registrationUtmSource?: InputMaybe<Scalars['String']>;
  registrationUtmMedium?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_114_Mutation = { __typename?: 'Mutation', registerCustomerAccount: { __typename: 'MissingPasswordError' } | { __typename: 'NativeAuthStrategyError' } | { __typename: 'PasswordValidationError' } | { __typename: 'Success' } };

export type Unnamed_115_MutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type Unnamed_115_Mutation = { __typename?: 'Mutation', requestPasswordReset?: { __typename: 'NativeAuthStrategyError' } | { __typename: 'Success' } | null };

export type Unnamed_116_MutationVariables = Exact<{
  password: Scalars['String'];
  token: Scalars['String'];
}>;


export type Unnamed_116_Mutation = { __typename?: 'Mutation', resetPassword: { __typename: 'CurrentUser' } | { __typename: 'NativeAuthStrategyError' } | { __typename: 'NotVerifiedError' } | { __typename: 'PasswordResetTokenExpiredError' } | { __typename: 'PasswordResetTokenInvalidError' } | { __typename: 'PasswordValidationError' } };

export type Unnamed_117_MutationVariables = Exact<{
  cardId: Scalars['ID'];
}>;


export type Unnamed_117_Mutation = { __typename?: 'Mutation', setPreferredCard: { __typename?: 'Card', id: string, cardNumber: string, cardHolderName: string, cardExpiredDate: string } };

export type Unnamed_118_MutationVariables = Exact<{
  id: Scalars['ID'];
  cardHolderName?: InputMaybe<Scalars['String']>;
  cardNumber?: InputMaybe<Scalars['String']>;
  cardExpirationDate?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_118_Mutation = { __typename?: 'Mutation', updateCard: { __typename?: 'Card', id: string, cardNumber: string, cardHolderName: string, cardExpiredDate: string } };

export type Unnamed_119_MutationVariables = Exact<{
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type Unnamed_119_Mutation = { __typename?: 'Mutation', updateCustomerPassword: { __typename: 'InvalidCredentialsError', errorCode: ErrorCode, message: string, authenticationError: string } | { __typename: 'NativeAuthStrategyError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordValidationError', errorCode: ErrorCode, message: string, validationErrorMessage: string } | { __typename: 'Success', success: boolean } };

export type Unnamed_120_MutationVariables = Exact<{
  input: UpdateCustomerInput;
}>;


export type Unnamed_120_Mutation = { __typename?: 'Mutation', updateCustomer: { __typename?: 'Customer', customFields?: { __typename?: 'CustomerCustomFields', IBAN?: string | null, fiscalCode?: string | null, bankAccountHolder?: string | null, ibanCountry?: { __typename?: 'Country', code: string, name: string } | null } | null } };

export type Unnamed_121_MutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['DateTime']>;
  onHolidays?: InputMaybe<Scalars['Boolean']>;
  gender?: InputMaybe<Scalars['String']>;
  shopName?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_121_Mutation = { __typename?: 'Mutation', updateCustomer: { __typename?: 'Customer', firstName: string, lastName: string, emailAddress: string, phoneNumber?: string | null, customFields?: { __typename?: 'CustomerCustomFields', birthdate?: any | null, onHolidays?: boolean | null, gender?: string | null, shopName?: string | null, website?: string | null } | null } };

export type Unnamed_122_MutationVariables = Exact<{
  variantId: Scalars['ID'];
}>;


export type Unnamed_122_Mutation = { __typename?: 'Mutation', addItemToWishlist: { __typename?: 'WhishlistNode', id: string, name: string, items: Array<{ __typename?: 'WishlistItem', productVariant?: { __typename?: 'ProductVariant', id: string } | null }> } };

export type Unnamed_123_MutationVariables = Exact<{
  variantId: Scalars['ID'];
}>;


export type Unnamed_123_Mutation = { __typename?: 'Mutation', deleteItemFromWishlist: { __typename?: 'WhishlistNode', id: string, name: string, items: Array<{ __typename?: 'WishlistItem', productVariant?: { __typename?: 'ProductVariant', id: string } | null }> } };

export type Unnamed_124_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_124_Query = { __typename?: 'Query', availableCountries: Array<{ __typename?: 'Country', id: string, code: string, translations: Array<{ __typename?: 'CountryTranslation', name: string, languageCode: LanguageCode }> }> };

export type Unnamed_125_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_125_Query = { __typename?: 'Query', activeOrder?: { __typename?: 'Order', id: string, code: string, totalQuantity: number, subTotal: number, state: string, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, couponCodes: Array<string>, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'AddressCustomFields', addressName?: string | null, firstName?: string | null, lastName?: string | null, emailAddress?: string | null, defaultPickupAddress?: boolean | null } | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, name: string, code: string } }>, payments?: Array<{ __typename?: 'Payment', id: string, createdAt: any, updatedAt: any, method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, unitPrice: number, unitPriceWithTax: number, unitPriceChangeSinceAdded: number, unitPriceWithTaxChangeSinceAdded: number, discountedUnitPrice: number, discountedUnitPriceWithTax: number, proratedUnitPrice: number, proratedUnitPriceWithTax: number, quantity: number, taxRate: number, linePrice: number, linePriceWithTax: number, discountedLinePrice: number, discountedLinePriceWithTax: number, proratedLinePrice: number, proratedLinePriceWithTax: number, lineTax: number, customFields?: { __typename?: 'OrderLineCustomFields', shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, name: string, product: { __typename?: 'Product', id: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, preview: string } | null, assets: Array<{ __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, type: AssetType, fileSize: number, mimeType: string, width: number, height: number, source: string, preview: string }> }, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, brand?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null } | null } }>, customer?: { __typename?: 'Customer', id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null } | null, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | null };

export type Unnamed_126_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_126_Query = { __typename?: 'Query', eligiblePaymentMethods: Array<{ __typename?: 'PaymentMethodQuote', id: string, name: string, code: string, description: string, isEligible: boolean, eligibilityMessage?: string | null, customFields?: { __typename?: 'PaymentMethodCustomFields', order?: number | null } | null }> };

export type Unnamed_127_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_127_Query = { __typename?: 'Query', eligibleShippingMethods: Array<{ __typename?: 'ShippingMethodQuote', id: string, name: string, code: string, description: string, priceWithTax: number, price: number }> };

export type Unnamed_128_QueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_128_Query = { __typename?: 'Query', collection?: { __typename?: 'Collection', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', preview: string } | null, assets: Array<{ __typename?: 'Asset', preview: string }>, translations: Array<{ __typename?: 'CollectionTranslation', description: string, slug: string, languageCode: LanguageCode }>, customFields?: { __typename?: 'CollectionCustomFields', SEOName?: string | null, SEOTitle?: string | null, SEODescription?: string | null } | null } | null };

export type Unnamed_129_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_129_Query = { __typename?: 'Query', collection?: { __typename?: 'Collection', id: string, slug: string, description: string, label: string, name: string, featuredAsset?: { __typename?: 'Asset', preview: string } | null, assets: Array<{ __typename?: 'Asset', preview: string }>, translations: Array<{ __typename?: 'CollectionTranslation', description: string, slug: string, languageCode: LanguageCode }>, customFields?: { __typename?: 'CollectionCustomFields', SEOName?: string | null, SEOTitle?: string | null, SEODescription?: string | null, showShop?: boolean | null, showUploading?: boolean | null, showMenu?: boolean | null, featured?: boolean | null, color?: string | null } | null, parent?: { __typename?: 'Collection', id: string, slug: string, label: string, name: string } | null, children?: Array<{ __typename?: 'Collection', id: string, slug: string, description: string, label: string, name: string, filters: Array<{ __typename?: 'ConfigurableOperation', code: string, args: Array<{ __typename?: 'ConfigArg', name: string, value: string }> }>, featuredAsset?: { __typename?: 'Asset', preview: string } | null, assets: Array<{ __typename?: 'Asset', preview: string }>, translations: Array<{ __typename?: 'CollectionTranslation', description: string, slug: string, languageCode: LanguageCode }>, customFields?: { __typename?: 'CollectionCustomFields', SEOName?: string | null, SEOTitle?: string | null, SEODescription?: string | null, showShop?: boolean | null, showUploading?: boolean | null, showMenu?: boolean | null, featured?: boolean | null, color?: string | null } | null, parent?: { __typename?: 'Collection', id: string, slug: string, label: string, name: string, filters: Array<{ __typename?: 'ConfigurableOperation', code: string, args: Array<{ __typename?: 'ConfigArg', name: string, value: string }> }> } | null, children?: Array<{ __typename?: 'Collection', id: string, slug: string, description: string, label: string, name: string, filters: Array<{ __typename?: 'ConfigurableOperation', code: string, args: Array<{ __typename?: 'ConfigArg', name: string, value: string }> }>, featuredAsset?: { __typename?: 'Asset', preview: string } | null, assets: Array<{ __typename?: 'Asset', preview: string }>, translations: Array<{ __typename?: 'CollectionTranslation', description: string, slug: string, languageCode: LanguageCode }>, customFields?: { __typename?: 'CollectionCustomFields', SEOName?: string | null, SEOTitle?: string | null, SEODescription?: string | null, showShop?: boolean | null, showUploading?: boolean | null, showMenu?: boolean | null, featured?: boolean | null, color?: string | null } | null, parent?: { __typename?: 'Collection', id: string, slug: string, label: string, name: string, filters: Array<{ __typename?: 'ConfigurableOperation', code: string, args: Array<{ __typename?: 'ConfigArg', name: string, value: string }> }>, parent?: { __typename?: 'Collection', id: string, filters: Array<{ __typename?: 'ConfigurableOperation', code: string, args: Array<{ __typename?: 'ConfigArg', name: string, value: string }> }> } | null } | null, children?: Array<{ __typename?: 'Collection', id: string, slug: string, description: string, label: string, name: string, filters: Array<{ __typename?: 'ConfigurableOperation', code: string, args: Array<{ __typename?: 'ConfigArg', name: string, value: string }> }>, featuredAsset?: { __typename?: 'Asset', preview: string } | null, assets: Array<{ __typename?: 'Asset', preview: string }>, translations: Array<{ __typename?: 'CollectionTranslation', description: string, slug: string, languageCode: LanguageCode }>, customFields?: { __typename?: 'CollectionCustomFields', SEOName?: string | null, SEOTitle?: string | null, SEODescription?: string | null, showShop?: boolean | null, showUploading?: boolean | null, showMenu?: boolean | null, featured?: boolean | null, color?: string | null } | null, parent?: { __typename?: 'Collection', id: string, slug: string, label: string, name: string, parent?: { __typename?: 'Collection', id: string, parent?: { __typename?: 'Collection', id: string, filters: Array<{ __typename?: 'ConfigurableOperation', code: string, args: Array<{ __typename?: 'ConfigArg', name: string, value: string }> }> } | null, filters: Array<{ __typename?: 'ConfigurableOperation', code: string, args: Array<{ __typename?: 'ConfigArg', name: string, value: string }> }> } | null, filters: Array<{ __typename?: 'ConfigurableOperation', code: string, args: Array<{ __typename?: 'ConfigArg', name: string, value: string }> }> } | null, children?: Array<{ __typename?: 'Collection', id: string, slug: string, description: string, label: string, name: string, featuredAsset?: { __typename?: 'Asset', preview: string } | null, assets: Array<{ __typename?: 'Asset', preview: string }>, translations: Array<{ __typename?: 'CollectionTranslation', description: string, slug: string, languageCode: LanguageCode }>, customFields?: { __typename?: 'CollectionCustomFields', SEOName?: string | null, SEOTitle?: string | null, SEODescription?: string | null, showShop?: boolean | null, showUploading?: boolean | null, showMenu?: boolean | null, featured?: boolean | null, color?: string | null } | null }> | null }> | null }> | null }> | null } | null };

export type Unnamed_130_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_130_Query = { __typename?: 'Query', availableCountries: Array<{ __typename?: 'Country', id: string, code: string, languageCode: LanguageCode, enabled: boolean, label: string, customFields?: { __typename?: 'CountryCustomFields', enableUploadingPage?: boolean | null, enableCheckout?: boolean | null } | null }> };

export type Unnamed_131_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_131_Query = { __typename?: 'Query', countryAvailableUploadingPage: Array<{ __typename?: 'Country', id: string, languageCode: LanguageCode, code: string, label: string, translations: Array<{ __typename?: 'CountryTranslation', id: string, languageCode: LanguageCode, label: string }> }> };

export type Unnamed_132_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_132_Query = { __typename?: 'Query', facets: { __typename?: 'FacetList', items: Array<{ __typename?: 'Facet', code: string, id: string, values: Array<{ __typename?: 'FacetValue', label: string, slug: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', extra?: string | null } | null }> }> } };

export type Unnamed_133_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_133_Query = { __typename?: 'Query', collections: { __typename?: 'CollectionList', totalItems: number, items: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, position: number, parent?: { __typename?: 'Collection', id: string, slug: string } | null, customFields?: { __typename?: 'CollectionCustomFields', SEOName?: string | null } | null }> } };

export type Unnamed_134_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_134_Query = { __typename?: 'Query', facets: { __typename?: 'FacetList', items: Array<{ __typename?: 'Facet', code: string, id: string, values: Array<{ __typename?: 'FacetValue', label: string, slug: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', extra?: string | null } | null }> }> } };

export type Unnamed_135_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_135_Query = { __typename?: 'Query', facets: { __typename?: 'FacetList', items: Array<{ __typename?: 'Facet', code: string, id: string, values: Array<{ __typename?: 'FacetValue', label: string, slug: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', extra?: string | null } | null }> }> } };

export type Unnamed_136_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_136_Query = { __typename?: 'Query', facets: { __typename?: 'FacetList', items: Array<{ __typename?: 'Facet', code: string, id: string, values: Array<{ __typename?: 'FacetValue', label: string, slug: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', extra?: string | null } | null }> }> } };

export type Unnamed_137_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_137_Query = { __typename?: 'Query', facets: { __typename?: 'FacetList', items: Array<{ __typename?: 'Facet', code: string, id: string, values: Array<{ __typename?: 'FacetValue', label: string, slug: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', extra?: string | null } | null }> }> } };

export type Unnamed_138_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_138_Query = { __typename?: 'Query', facets: { __typename?: 'FacetList', items: Array<{ __typename?: 'Facet', code: string, id: string, values: Array<{ __typename?: 'FacetValue', label: string, slug: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', extra?: string | null } | null }> }> } };

export type Unnamed_139_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_139_Query = { __typename?: 'Query', myCards: { __typename?: 'CardList', totalItems: number, items: Array<{ __typename?: 'Card', id: string, cardNumber: string, cardHolderName: string, preferred: boolean, cardExpiration: string }> } };

export type Unnamed_140_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_140_Query = { __typename?: 'Query', myWishlist: { __typename?: 'WhishlistNode', id: string, name: string, default: boolean, user: { __typename?: 'User', id: string }, items: Array<{ __typename?: 'WishlistItem', id: string, productVariant?: { __typename?: 'ProductVariant', id: string, name: string, sku: string, price: number, stockLevel: string, createdAt: any, featuredAsset?: { __typename?: 'Asset', id: string, name: string, createdAt: any, updatedAt: any, width: number, height: number, preview: string } | null, customFields?: { __typename?: 'ProductVariantCustomFields', customBrand?: string | null, brand?: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }> | null } | null, product: { __typename?: 'Product', id: string, name: string, slug: string, description: string, featuredAsset?: { __typename?: 'Asset', id: string, name: string, createdAt: any, updatedAt: any, width: number, height: number, preview: string } | null } } | null }> } };

export type Unnamed_141_QueryVariables = Exact<{
  offerId: Scalars['ID'];
}>;


export type Unnamed_141_Query = { __typename?: 'Query', getOffer: { __typename?: 'OfferResult', success: boolean, message?: string | null, code?: number | null, offer?: { __typename?: 'Offer', id: string, statusCode: number, price: number, quantity: number, product: { __typename?: 'Product', id: string, name: string }, seller: { __typename?: 'Customer', customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null } | null }, buyer: { __typename?: 'Customer', firstName: string, lastName: string, emailAddress: string } } | null } };

export type Unnamed_142_QueryVariables = Exact<{
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>>;
}>;


export type Unnamed_142_Query = { __typename?: 'Query', getReceivedOffers: { __typename?: 'OfferList', totalItems: number, items: Array<{ __typename?: 'Offer', id: string, createdAt: number, updatedAt: number, price: number, quantity: number, statusCode: number, expiresAt?: number | null, uid?: string | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, product: { __typename?: 'Product', id: string, slug: string, name: string, featuredAsset?: { __typename?: 'Asset', width: number, height: number, preview: string } | null, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, featuredAsset?: { __typename?: 'Asset', width: number, height: number, preview: string } | null, customFields?: { __typename?: 'ProductVariantCustomFields', limitPrice?: number | null, reservePrice?: number | null, earning?: number | null, brand?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null } | null }> } }> } };

export type Unnamed_143_QueryVariables = Exact<{
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>>;
}>;


export type Unnamed_143_Query = { __typename?: 'Query', getSentOffers: { __typename?: 'OfferList', totalItems: number, items: Array<{ __typename?: 'Offer', id: string, uid?: string | null, createdAt: number, updatedAt: number, price: number, quantity: number, statusCode: number, expiresAt?: number | null, seller: { __typename?: 'Customer', id: string }, buyer: { __typename?: 'Customer', id: string }, product: { __typename?: 'Product', id: string, slug: string, name: string, featuredAsset?: { __typename?: 'Asset', width: number, height: number, preview: string } | null, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, featuredAsset?: { __typename?: 'Asset', width: number, height: number, preview: string } | null, customFields?: { __typename?: 'ProductVariantCustomFields', limitPrice?: number | null, reservePrice?: number | null, earning?: number | null, brand?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null } | null }> } }> } };

export type Unnamed_144_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_144_Query = { __typename?: 'Query', activeCustomer?: { __typename?: 'Customer', orders: { __typename?: 'OrderList', totalItems: number, items: Array<{ __typename: 'Order', id: string, state: string, couponCodes: Array<string>, lines: Array<{ __typename?: 'OrderLine', id: string, createdAt: any, updatedAt: any, quantity: number, unitPrice: number, discountedUnitPrice: number, customFields?: { __typename?: 'OrderLineCustomFields', courierName?: string | null, courierTracking?: string | null, extraServicePrice?: number | null, shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, languageCode: LanguageCode, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', name: string, productId: string, sku: string, stockLevel: string, price: number, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, preview: string } | null, customFields?: { __typename?: 'ProductVariantCustomFields', brand?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null } | null, product: { __typename?: 'Product', id: string, name: string, slug: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, preview: string } | null } }, order: { __typename?: 'Order', createdAt: any, updatedAt: any, id: string, code: string, state: string, active: boolean, totalQuantity: number, shipping: number, subTotal: number, subTotalWithTax: number, currencyCode: CurrencyCode, total: number, totalWithTax: number, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null } | null, payments?: Array<{ __typename?: 'Payment', method: string, amount: number, state: string, transactionId?: string | null, errorMessage?: string | null }> | null } }> }> } } | null };

export type Unnamed_145_QueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type Unnamed_145_Query = { __typename?: 'Query', orderByCode?: { __typename?: 'Order', createdAt: any, id: string, code: string, state: string, couponCodes: Array<string>, totalQuantity: number, subTotal: number, subTotalWithTax: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, discounts: Array<{ __typename?: 'Discount', adjustmentSource: string, type: AdjustmentType, description: string, amount: number, amountWithTax: number }>, promotions: Array<{ __typename?: 'Promotion', id: string, couponCode?: string | null, name: string }>, lines: Array<{ __typename?: 'OrderLine', linePrice: number, linePriceWithTax: number, quantity: number, customFields?: { __typename?: 'OrderLineCustomFields', courierName?: string | null, courierTracking?: string | null, extraServicePrice?: number | null, shippingLine?: { __typename?: 'ShippingLine', price: number, priceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', id: string, languageCode: LanguageCode, code: string, name: string } } | null } | null, productVariant: { __typename?: 'ProductVariant', name: string, featuredAsset?: { __typename?: 'Asset', id: string, name: string, updatedAt: any, createdAt: any, preview: string } | null, product: { __typename?: 'Product', id: string, name: string, slug: string, featuredAsset?: { __typename?: 'Asset', id: string, name: string, updatedAt: any, createdAt: any, preview: string } | null }, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, brand?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null } | null }, order: { __typename?: 'Order', customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } }>, customer?: { __typename?: 'Customer', firstName: string, lastName: string } | null, shippingAddress?: { __typename?: 'OrderAddress', streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null } | null, billingAddress?: { __typename?: 'OrderAddress', streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null } | null, payments?: Array<{ __typename?: 'Payment', method: string, amount: number, state: string, transactionId?: string | null }> | null, shippingLines: Array<{ __typename?: 'ShippingLine', price: number, priceWithTax: number, discountedPrice: number, discountedPriceWithTax: number, shippingMethod: { __typename?: 'ShippingMethod', code: string, name: string, description: string } }>, taxSummary: Array<{ __typename?: 'OrderTaxSummary', description: string, taxRate: number, taxBase: number, taxTotal: number }>, customFields?: { __typename?: 'OrderCustomFields', customerNote?: string | null } | null } | null };

export type Unnamed_146_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_146_Query = { __typename?: 'Query', collections: { __typename?: 'CollectionList', totalItems: number, items: Array<{ __typename?: 'Collection', id: string, slug: string, position: number, label: string, featuredAsset?: { __typename?: 'Asset', preview: string } | null, parent?: { __typename?: 'Collection', id: string, slug: string } | null, customFields?: { __typename?: 'CollectionCustomFields', SEOName?: string | null } | null }> } };

export type Unnamed_147_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_147_Query = { __typename?: 'Query', collections: { __typename?: 'CollectionList', totalItems: number, items: Array<{ __typename?: 'Collection', id: string, slug: string, position: number, label: string, featuredAsset?: { __typename?: 'Asset', preview: string } | null, parent?: { __typename?: 'Collection', id: string, slug: string } | null, customFields?: { __typename?: 'CollectionCustomFields', SEOName?: string | null } | null }> } };

export type Unnamed_148_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_148_Query = { __typename?: 'Query', collections: { __typename?: 'CollectionList', totalItems: number, items: Array<{ __typename?: 'Collection', id: string, slug: string, position: number, label: string, parent?: { __typename?: 'Collection', id: string, slug: string, name: string, parent?: { __typename?: 'Collection', id: string, slug: string, name: string, parent?: { __typename?: 'Collection', id: string, slug: string, name: string } | null } | null } | null, customFields?: { __typename?: 'CollectionCustomFields', SEOName?: string | null } | null }> } };

export type Unnamed_149_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_149_Query = { __typename?: 'Query', search: { __typename?: 'SearchResponse', totalItems: number, items: Array<{ __typename?: 'SearchResult', slug: string, inStock?: boolean | null, productVariantId: string, productVariantName: string, collectionIds: Array<string>, sku: string, id: string, name: string, featuredAsset?: { __typename?: 'SearchResultAsset', preview: string } | null, productVariantPrice: { __typename: 'PriceRange' } | { __typename: 'SinglePrice', value: number }, customMappings: { __typename?: 'CustomProductMappings', featuredProduct?: boolean | null } | { __typename?: 'CustomProductVariantMappings', sellerType?: string | null, localPickupEnabled?: boolean | null, brandIds?: Array<string> | null, brandCodes?: Array<string> | null, createDateTime?: number | null, publishDate?: number | null, reducePriceDate?: number | null } }> } };

export type Unnamed_150_QueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Unnamed_150_Query = { __typename?: 'Query', myProduct?: { __typename?: 'Product', id: string, description: string, translations: Array<{ __typename?: 'ProductTranslation', languageCode: LanguageCode, slug: string, description: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, customFields?: { __typename?: 'ProductVariantCustomFields', width?: string | null, height?: string | null, depth?: string | null, heightSeat?: string | null, isOutProduction?: boolean | null, isLampIncluded?: boolean | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, condition?: Array<{ __typename?: 'FacetValue', label: string, slug: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null, material?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null } | null }> } | null };

export type Unnamed_151_QueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Unnamed_151_Query = { __typename?: 'Query', myProduct?: { __typename?: 'Product', id: string, name: string, slug: string, createdAt: any, translations: Array<{ __typename?: 'ProductTranslation', languageCode: LanguageCode, name: string, slug: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', offerEnabled?: boolean | null } | null }>, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null, sellerSubType?: string | null, sellerCustomFee?: number | null } | null } | null } | null } | null };

export type Unnamed_152_QueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Unnamed_152_Query = { __typename?: 'Query', myProduct?: { __typename?: 'Product', id: string, name: string, slug: string, translations: Array<{ __typename?: 'ProductTranslation', languageCode: LanguageCode, name: string, slug: string }>, assets: Array<{ __typename?: 'Asset', id: string, name: string, type: AssetType, preview: string, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, primaryCategory?: { __typename?: 'Collection', id: string, languageCode?: LanguageCode | null, name: string, slug: string, position: number, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, style?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null, designer?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null, brand?: Array<{ __typename?: 'FacetValue', code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null } | null }> | null } | null }> } | null };

export type Unnamed_153_QueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Unnamed_153_Query = { __typename?: 'Query', myProduct?: { __typename?: 'Product', id: string, name: string, translations: Array<{ __typename?: 'ProductTranslation', languageCode: LanguageCode }>, variants: Array<{ __typename?: 'ProductVariant', id: string, price: number, stockLevel: string, customFields?: { __typename?: 'ProductVariantCustomFields', reservePrice?: number | null, retailPrice?: number | null, limitPrice?: number | null, earning?: number | null, soldIndividually?: boolean | null } | null }> } | null };

export type Unnamed_154_QueryVariables = Exact<{
  statusIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type Unnamed_154_Query = { __typename?: 'Query', myProducts?: { __typename: 'ProductList', totalItems: number, items: Array<{ __typename?: 'Product', id: string, name: string, slug: string, featuredAsset?: { __typename?: 'Asset', preview: string } | null, variants: Array<{ __typename?: 'ProductVariant', id: string, price: number, name: string, createdAt: any, updatedAt: any, stockLevel: string, featuredAsset?: { __typename?: 'Asset', preview: string } | null, customFields?: { __typename?: 'ProductVariantCustomFields', shippingCity?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingCountryCode?: string | null, shippingAddress?: string | null, reservePrice?: number | null, earning?: number | null, limitPrice?: number | null, retailPrice?: number | null, status?: string | null, brand?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null } | null }> }> } | null };

export type Unnamed_155_QueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_155_Query = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, description: string, translations: Array<{ __typename?: 'ProductTranslation', languageCode: LanguageCode, slug: string, description: string }>, variants: Array<{ __typename?: 'ProductVariant', customFields?: { __typename?: 'ProductVariantCustomFields', width?: string | null, height?: string | null, depth?: string | null, heightSeat?: string | null, isOutProduction?: boolean | null, isLampIncluded?: boolean | null, shippingCountryCode?: string | null, shippingLocalPickupEnabled?: boolean | null, shippingAddress?: string | null, shippingCity?: string | null, shippingNotes?: string | null, condition?: Array<{ __typename?: 'FacetValue', label: string, slug: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', extra?: string | null, extraLocale?: string | null } | null }> | null, color?: Array<{ __typename?: 'FacetValue', code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', extra?: string | null } | null }> | null, material?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null } | null }> } | null };

export type Unnamed_156_QueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_156_Query = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, slug: string, createdAt: any, translations: Array<{ __typename?: 'ProductTranslation', languageCode: LanguageCode, name: string, slug: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }>, parent?: { __typename?: 'Collection', id: string, slug: string } | null }>, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', offerEnabled?: boolean | null, reducePriceDate?: any | null } | null }>, customFields?: { __typename?: 'ProductCustomFields', seller?: { __typename?: 'Customer', customFields?: { __typename?: 'CustomerCustomFields', sellerType?: string | null, sellerSubType?: string | null, sellerCustomFee?: number | null } | null } | null } | null } | null };

export type Unnamed_157_QueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_157_Query = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, slug: string, translations: Array<{ __typename?: 'ProductTranslation', languageCode: LanguageCode, name: string, slug: string }>, assets: Array<{ __typename?: 'Asset', id: string, name: string, type: AssetType, preview: string, customFields?: { __typename?: 'AssetCustomFields', assetType?: string | null } | null }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, customFields?: { __typename?: 'ProductVariantCustomFields', customDesigner?: string | null, customBrand?: string | null, hasNoBrand?: boolean | null, primaryCategory?: { __typename?: 'Collection', id: string, languageCode?: LanguageCode | null, name: string, slug: string, position: number, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> } | null, selectedCategory?: { __typename?: 'Collection', id: string, name: string, slug: string } | null, style?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null, designer?: Array<{ __typename?: 'FacetValue', code: string, label: string }> | null, brand?: Array<{ __typename?: 'FacetValue', code: string, label: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null } | null }> | null } | null }>, collections: Array<{ __typename?: 'Collection', name: string, slug: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', id: string, name: string, slug: string }> }> } | null };

export type Unnamed_158_QueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_158_Query = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, translations: Array<{ __typename?: 'ProductTranslation', languageCode: LanguageCode }>, variants: Array<{ __typename?: 'ProductVariant', id: string, price: number, stockLevel: string, customFields?: { __typename?: 'ProductVariantCustomFields', reservePrice?: number | null, retailPrice?: number | null, limitPrice?: number | null, earning?: number | null, soldIndividually?: boolean | null } | null }> } | null };

export type Unnamed_159_QueryVariables = Exact<{
  statusIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type Unnamed_159_Query = { __typename?: 'Query', myProducts?: { __typename?: 'ProductList', totalItems: number } | null };

export type Unnamed_160_QueryVariables = Exact<{
  categorySlug?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_160_Query = { __typename?: 'Query', search: { __typename?: 'SearchResponse', totalItems: number, items: Array<{ __typename?: 'SearchResult', slug: string, productVariantId: string, productVariantName: string, inStock?: boolean | null, sku: string, id: string, name: string, featuredAsset?: { __typename?: 'SearchResultAsset', preview: string } | null, priceWithTax: { __typename: 'PriceRange', max: number, min: number } | { __typename: 'SinglePrice' }, productVariantPrice: { __typename: 'PriceRange' } | { __typename: 'SinglePrice', value: number }, customMappings: { __typename?: 'CustomProductMappings', featuredProduct?: boolean | null } | { __typename?: 'CustomProductVariantMappings', sellerType?: string | null, localPickupEnabled?: boolean | null, brandIds?: Array<string> | null, brandCodes?: Array<string> | null, createDateTime?: number | null, publishDate?: number | null, reducePriceDate?: number | null } }> } };

export type Unnamed_161_QueryVariables = Exact<{
  input: SearchInput;
}>;


export type Unnamed_161_Query = { __typename?: 'Query', search: { __typename?: 'SearchResponse', totalItems: number, items: Array<{ __typename?: 'SearchResult', productId: string, productName: string, slug: string, inStock?: boolean | null, productVariantId: string, productVariantName: string, collectionIds: Array<string>, sku: string, productAsset?: { __typename?: 'SearchResultAsset', preview: string } | null, priceWithTax: { __typename: 'PriceRange' } | { __typename: 'SinglePrice', value: number }, customMappings: { __typename?: 'CustomProductMappings', featuredProduct?: boolean | null } | { __typename?: 'CustomProductVariantMappings', sellerType?: string | null, localPickupEnabled?: boolean | null, brandIds?: Array<string> | null, createDateTime?: number | null, publishDate?: number | null, reducePriceDate?: number | null } }> } };

export type Unnamed_162_QueryVariables = Exact<{
  searchString: Scalars['String'];
}>;


export type Unnamed_162_Query = { __typename?: 'Query', facets: { __typename?: 'FacetList', items: Array<{ __typename?: 'Facet', code: string, id: string, values: Array<{ __typename?: 'FacetValue', label: string, slug: string, code: string, customFields?: { __typename?: 'FacetValueCustomFields', description?: string | null, extra?: string | null, extraLocale?: string | null } | null }> }> } };

export type Unnamed_163_QueryVariables = Exact<{
  variantId: Scalars['ID'];
  countryCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type Unnamed_163_Query = { __typename?: 'Query', getShippingMethodsWithPrice?: Array<{ __typename?: 'ResponseShippingMethodsPrice', code: string, price: number, label?: string | null, country?: string | null, shippingMethodId?: string | null } | null> | null };

export type Unnamed_164_QueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_164_Query = { __typename?: 'Query', collection?: { __typename?: 'Collection', id: string, name: string, slug: string, description: string, position: number, parent?: { __typename?: 'Collection', id: string, slug: string } | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', name: string, slug: string }>, productVariants: { __typename?: 'ProductVariantList', totalItems: number } } | null };

export type Unnamed_165_QueryVariables = Exact<{
  variantId: Scalars['ID'];
}>;


export type Unnamed_165_Query = { __typename?: 'Query', countWishlistFor: { __typename?: 'WishlistCounter', counter: number, haveCurrent?: boolean | null } };
