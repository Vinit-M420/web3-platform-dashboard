{/* {selectedTab === 1 && 
                <Reorder.Group axis="y" values={assetCategoryOrder} onReorder={SetAssetCategoryOrder}>
                    {assetCategoryOrder.map((category, index) =>  {
                        const assets = ASSET_TABLE_DATA[category as keyof typeof ASSET_TABLE_DATA];
                        return (
                            <Reorder.Item
                                key={category}
                                value={category}
                                dragListener={false}
                                dragControls={dragControls}
                                className="select-none"
                            >
                            <div className="flex items-center gap-2 p-4 border-b group hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200">
                                <span className="flex gap-2 overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-400"> 
                                    <GripVertical className={`w-4 h-4 cursor-grab`} 
                                        onPointerDown={(e) => dragControls.start(e)} />
                                    <Checkbox className="border border-gray-500" />
                                    <EllipsisVertical className='w-4 h-4 ' /> 
                                </span>
                                <span className="flex gap-2 items-center"
                                    onClick={() => 
                                        {
                                            setDropDownExpand(category as AssetdropdownExpandType)
                                            if (category === dropdownExpand) setDropDownExpand("none");
                                        }}>
                                    <ChevronUp className={`w-4 h-4 transition-all duration-500
                                    ${dropdownExpand === category ? "rotate-180" : ""}`} />
                                    <span>{category}</span>
                                </span>                           
                            </div>
                            <AnimatePresence>
                                {dropdownExpand === category && selectedTab === 1 &&
                                <motion.div
                                    key="dropdown"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="px-5 py-1 divide-y divide-gray-200 dark:divide-gray-800">
                                    {assets.map((row, rowIndex) => (
                                        <div key={rowIndex} className="flex justify-between items-center py-5 text-sm">
                                            <span className="text-gray-800 dark:text-gray-200 font-medium text-center">{row.asset}</span>
                                            <div className="flex gap-10 dark:text-gray-400 text-gray-500 text-center">
                                                <span className="w-[60px]">{row.assetId}</span>
                                                <span className={`w-[60px] 
                                                    ${row.shareOfAsset < 36 ? 'text-red-500' : "" }
                                                    ${row.shareOfAsset > 35 && row.shareOfAsset < 75   ? 'text-yellow-500' : "" }
                                                    ${row.shareOfAsset > 74 ? 'text-green-500' : "" }`}>
                                                    {row.shareOfAsset}%
                                                </span> 
                                                <span className="w-[60px]">{row.valuation}</span>
                                                <span className="w-[60px]">{row.volume}</span>
                                                <span className="w-[60px]">{row.marketValue}</span>
                                                <span className="w-[60px]">{row.loan}</span>
                                                <span className="w-[60px]">{row.chain}</span>
                                                <span className="w-[60px]">{row.issuer}</span>
                                                <span className="w-[60px]">{row.custodian}</span>
                                                <span className="w-[60px]">{row.oracleSource}</span>
                                                <span className="w-[60px]">{row.valuationDate}</span>
                                            </div>
                                        </div>
                                    ))}
                                    
                                </motion.div>
                                }
                            </AnimatePresence>
                            </Reorder.Item>
                    )})}
                </Reorder.Group>  
                } */}